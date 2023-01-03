using Grinder.Models;
using GrinderItems.Data;
using Microsoft.AspNetCore.Mvc;
using UserInfo.Controllers;
using Microsoft.EntityFrameworkCore;

namespace Grinder.Controllers
{
  [Route("api/GrinderItems")]
  [ApiController]
  public class GrinderController : ControllerBase
  {
    private readonly GrinderContext _context;
    private readonly UserInfoItemsController _userInfoController;

    public GrinderController(GrinderContext context, UserInfoItemsController userInfoController)
    {
      _context = context;
      _userInfoController = userInfoController;
    }
    //GET: api/GrinderItems/all/{id}, get all grinders for a user
    [HttpGet("all/{user_id}")]
    public async Task<ActionResult<IEnumerable<GrinderItem>>> GetAllGrindersForUser(int user_id)
    {
      if (_context.GrinderItems == null)
      {
        return NotFound();
      }
      var Grinders = await _context.GrinderItems.Where(r => r.User_Id == user_id).ToListAsync();
      if (Grinders == null)
      {
        return NotFound();
      }
      return Ok(Grinders);
    }
    //GET: api/GrinderItems/{id} get a grinder by id
    [HttpGet("{id}")]
    public async Task<ActionResult<IEnumerable<GrinderItem>>> GetGrinderById(int id)
    {
      if (_context.GrinderItems == null) { return NotFound(); }
      var Grinder = await _context.GrinderItems.Where(r => r.Id == id).ToListAsync();
      if (Grinder == null)
      {
        return NotFound();
      }
      return Ok(Grinder);
    }

    //PUT: api/GrinderItems/{id} , update grinder by id
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateGrinderInfo(int id, GrinderItem grinderInfo)
    {
      var existingGrinder = await _context.GrinderItems.AsNoTracking().FirstOrDefaultAsync(m => m.Id == id);
      if (existingGrinder == null)
      {
        return NotFound();
      }
      if (id != grinderInfo.Id)
      {
        return BadRequest();
      }

      // Use the injected UserInfoItemsController to call the GetUserById method
      var user = await _userInfoController.GetUserById(existingGrinder.User_Id);
      if (user == null)
      {
        return NotFound();
      }

      // Verify that the user has permission to update the object
      if (user.Value?.Id != grinderInfo.User_Id)
      {
        return Unauthorized();
      }
      _context.Entry(grinderInfo).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!GrinderExists(grinderInfo.User_Id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }
    return NoContent();
  }
    //POST api/GrinderItems , add a grinder
    [HttpPost]
    public async Task<ActionResult<GrinderItem>> AddGrinder(GrinderItem grinderItem)
    {
      var newGrinderItem = new GrinderItem();
      // Find the maximum ID value in the user table
      var itemsExist = await _context.GrinderItems.AnyAsync();
      int maxId = 0;
      if (itemsExist)
      {
        maxId = await _context.GrinderItems.MaxAsync(u => u.Id);
      }
      // Increment the ID by 1 to get the next available ID
      grinderItem.Id = maxId + 1;
      newGrinderItem = grinderItem;
      if (_context.GrinderItems == null)
      {
        return Problem("Entity set 'GrinderContext.GrinderItems' is null");
      }
      var user = await _userInfoController.GetUserById(newGrinderItem.User_Id);
      if (user == null)
      {
        return NotFound();
      }

      // Verify that the user has permission to update the object
      if (user.Value?.Id != newGrinderItem.User_Id)
      {
        return Unauthorized(user.Value?.Id);
      }
      _context.GrinderItems.Add(newGrinderItem);
      await _context.SaveChangesAsync();
    return CreatedAtAction(nameof(GetGrinderById), new { id = newGrinderItem.Id }, newGrinderItem);
    }
    //DELETE api/GrinderItems/{id} delete a grinder
    [HttpDelete("{name}")]
    public async Task<IActionResult> DeleteGrinder(string name)
    {
      if (_context.GrinderItems == null)
      {
        return NotFound();
      }
      var grinderInfo = await _context.GrinderItems.FirstOrDefaultAsync(g => g.Name == name);
      if (grinderInfo == null)
      {
        return NotFound();
      }
      _context.GrinderItems.Remove(grinderInfo);
      await _context.SaveChangesAsync();

      return NoContent();
    }
    //does the grinder exist in the database?
    private bool GrinderExists(int id)
    {
      return (_context.GrinderItems?.Any(e => e.Id == id)).GetValueOrDefault();
    }

  }
}

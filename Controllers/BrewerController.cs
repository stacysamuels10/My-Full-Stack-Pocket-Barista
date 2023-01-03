using Brewer.Models;
using BrewerItems.Data;
using Microsoft.AspNetCore.Mvc;
using UserInfo.Controllers;
using Microsoft.EntityFrameworkCore;
using Grinder.Models;

namespace Brewer.Controllers
{
  [Route("api/BrewerItems")]
  [ApiController]
  public class BrewerController : ControllerBase
  {
    private readonly BrewerContext _context;
    private readonly UserInfoItemsController _userInfoController;

    public BrewerController(BrewerContext context, UserInfoItemsController userInfoController)
    {
      _context = context;
      _userInfoController = userInfoController;
    }
    //GET: api/BrewerItems/all/{id}, get all brewers for a user
    [HttpGet("all/{user_id}")]
    public async Task<ActionResult<IEnumerable<BrewerItem>>> GetAllBrewersForUser(int user_id)
    {
      if (_context.BrewerItems == null)
      {
        return NotFound();
      }
      var Brewers = await _context.BrewerItems.Where(r => r.User_Id == user_id).ToListAsync();
      if (Brewers == null)
      {
        return NotFound();
      }
      return Ok(Brewers);
    }

    //GET: api/BrewerItems/{id} get a brewer by id
    [HttpGet("{id}")]
    public async Task<ActionResult<IEnumerable<BrewerItem>>> GetBrewerById(int id)
    {
      if (_context.BrewerItems == null) { return NotFound(); }
      var Brewer = await _context.BrewerItems.Where(r => r.Id == id).ToListAsync();
      if (Brewer == null)
      {
        return NotFound();
      }
      return Ok(Brewer);
    }

    //PUT: api/BrewerItems/{id} , update brewer by id
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateBrewerInfo(int id, BrewerItem brewerInfo)
    {
      var existingBrewer = await _context.BrewerItems.AsNoTracking().FirstOrDefaultAsync(m => m.Id == id);
      if (existingBrewer == null)
      {
        return NotFound();
      }
      if (id != brewerInfo.Id)
      {
        return BadRequest();
      }

      // Use the injected UserInfoItemsController to call the GetUserById method
      var user = await _userInfoController.GetUserById(existingBrewer.User_Id);
      if (user == null)
      {
        return NotFound();
      }

      // Verify that the user has permission to update the object
      if (user.Value?.Id != brewerInfo.User_Id)
      {
        return Unauthorized();
      }
      _context.Entry(brewerInfo).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!BrewerExists(brewerInfo.User_Id))
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
    //POST api/BrewerItems , add a brewer
    [HttpPost]
    public async Task<ActionResult<BrewerItem>> AddBrewer(BrewerItem brewerItem)
    {
      var newBrewerItem = new BrewerItem();
      // Find the maximum ID value in the user table
      var itemsExist = await _context.BrewerItems.AnyAsync();
      int maxId = 0;
      if (itemsExist)
      {
        maxId = await _context.BrewerItems.MaxAsync(u => u.Id);
      }
      // Increment the ID by 1 to get the next available ID
      brewerItem.Id = maxId + 1;
      newBrewerItem = brewerItem;
      if (_context.BrewerItems == null)
      {
        return Problem("Entity set 'BrewerContext.BrewerItems' is null");
      }
      var user = await _userInfoController.GetUserById(newBrewerItem.User_Id);
      if (user == null)
      {
        return NotFound();
      }

      // Verify that the user has permission to update the object
      if (user.Value?.Id != newBrewerItem.User_Id)
      {
        return Unauthorized();
      }
      _context.BrewerItems.Add(newBrewerItem);
      await _context.SaveChangesAsync();
      return CreatedAtAction(nameof(GetBrewerById), new { id = newBrewerItem.Id }, newBrewerItem);
    }
    //DELETE api/BrewerItems/{id} delete a brewer
    [HttpDelete("{name}")]
    public async Task<IActionResult> DeleteBrewer(string name)
    {
      if (_context.BrewerItems == null)
      {
        return NotFound();
      }
      var brewerInfo = await _context.BrewerItems.FirstOrDefaultAsync(g => g.Name == name);
      if (brewerInfo == null)
      {
        return NotFound();
      }
      _context.BrewerItems.Remove(brewerInfo);
      await _context.SaveChangesAsync();

      return NoContent();
    }
    //does the brewer exist in the database?
    private bool BrewerExists(int id)
    {
      return (_context.BrewerItems?.Any(e => e.Id == id)).GetValueOrDefault();
    }

  }
}

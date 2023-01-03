using BrewedCup.Models;
using BrewedCupItems.Data;
using Microsoft.AspNetCore.Mvc;
using UserInfo.Controllers;
using Microsoft.EntityFrameworkCore;
using CoffeeBag.Models;

namespace BrewedCup.Controllers
{
  [Route("api/BrewedCupItems")]
  [ApiController]
  public class BrewedCupController : ControllerBase
  {
    private readonly BrewedCupContext _context;
    private readonly UserInfoItemsController _userInfoController;

    public BrewedCupController(BrewedCupContext context, UserInfoItemsController userInfoController)
    {
      _context = context;
      _userInfoController = userInfoController;
    }
    //GET: api/BrewedCupItems/all/{id}, get all brewed cups for a user
    [HttpGet("all/{user_id}")]
    public async Task<ActionResult<IEnumerable<BrewedCupItem>>> GetAllBrewedCupsForUser(int user_id)
    {
      if (_context.BrewedCupItems == null)
      {
        return NotFound();
      }
      var BrewedCups = await _context.BrewedCupItems.Where(r => r.User_Id == user_id).ToListAsync();
      if (BrewedCups == null)
      {
        return NotFound();
      }
      return Ok(BrewedCups);
    }
    //GET: api/BrewedCupItems/{id} get a brewed cup by id
    [HttpGet("{id}")]
    public async Task<ActionResult<IEnumerable<BrewedCupItem>>> GetBrewedCupById(int id)
    {
      if (_context.BrewedCupItems == null) { return NotFound(); }
      var BrewedCup = await _context.BrewedCupItems.Where(r => r.Id == id).ToListAsync();
      if (BrewedCup == null)
      {
        return NotFound();
      }
      return Ok(BrewedCup);
    }

    //PUT: api/BrewedCupItems/{id} , update Brewed Cup by id
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateBrewedCupInfo(int id, BrewedCupItem BrewedCupInfo)
    {
      var existingBrewedCup = await _context.BrewedCupItems.AsNoTracking().FirstOrDefaultAsync(m => m.Id == id);
      if (existingBrewedCup == null)
      {
        return NotFound();
      }
      if (id != BrewedCupInfo.Id)
      {
        return BadRequest();
      }

      // Use the injected UserInfoItemsController to call the GetUserById method
      var user = await _userInfoController.GetUserById(existingBrewedCup.User_Id);
      if (user == null)
      {
        return NotFound();
      }

      // Verify that the user has permission to update the object
      if (user.Value?.Id != BrewedCupInfo.User_Id)
      {
        return Unauthorized();
      }
      _context.Entry(BrewedCupInfo).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!BrewedCupExists(BrewedCupInfo.User_Id))
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
    //POST api/BrewedCupItems , add a brewed cup
    [HttpPost]
    public async Task<ActionResult<BrewedCupItem>> AddBrewedCup(BrewedCupItem BrewedCupItem)
    {
      var newBrewedCupItem = new BrewedCupItem();
      var itemsExist = await _context.BrewedCupItems.AnyAsync();
      int maxId = 0;
      if (itemsExist)
      {
        maxId = await _context.BrewedCupItems.MaxAsync(u => u.Id);
      }
      BrewedCupItem.Id = maxId + 1;
      newBrewedCupItem = BrewedCupItem;
      if (_context.BrewedCupItems == null)
      {
        return Problem("Entity set 'BrewedCupContext.BrewedCupItems' is null");
      }
      var user = await _userInfoController.GetUserById(newBrewedCupItem.User_Id);
      if (user == null)
      {
        return NotFound();
      }

      // Verify that the user has permission to update the object
      if (user.Value?.Id != newBrewedCupItem.User_Id)
      {
        return Unauthorized();
      }
      _context.BrewedCupItems.Add(newBrewedCupItem);
      await _context.SaveChangesAsync();
      return CreatedAtAction(nameof(GetBrewedCupById), new { id = newBrewedCupItem.Id }, newBrewedCupItem);
    }
    //DELETE api/BrewedCupItems/{id} delete a brewed cup
    [HttpDelete("{date}")]
    public async Task<IActionResult> DeleteBrewedCup(string date)
    {
      if (_context.BrewedCupItems == null)
      {
        return NotFound();
      }
      var BrewedCupInfo = await _context.BrewedCupItems.FirstOrDefaultAsync(g => g.Date_Of_Brew == date);
      if (BrewedCupInfo == null)
      {
        return NotFound();
      }
      _context.BrewedCupItems.Remove(BrewedCupInfo);
      await _context.SaveChangesAsync();

      return NoContent();
    }
    //does the brewed cup exist in the database?
    private bool BrewedCupExists(int id)
    {
      return (_context.BrewedCupItems?.Any(e => e.Id == id)).GetValueOrDefault();
    }
  }
}
using CoffeeBag.Models;
using CoffeeBagItems.Data;
using Microsoft.AspNetCore.Mvc;
using UserInfo.Controllers;
using Microsoft.EntityFrameworkCore;

namespace CoffeeBag.Controllers
{
  [Route("api/CoffeeBagItems")]
  [ApiController]
  public class CoffeeBagController : ControllerBase
  {
    private readonly CoffeeBagContext _context;
    private readonly UserInfoItemsController _userInfoController;

    public CoffeeBagController(CoffeeBagContext context, UserInfoItemsController userInfoController)
    {
      _context = context;
      _userInfoController = userInfoController;
    }
    //GET: api/CoffeeBagItems/all/{id}, get all coffee bags for a user
    [HttpGet("all/{user_id}")]
    public async Task<ActionResult<IEnumerable<CoffeeBagItem>>> GetAllCoffeBagsForUser(int user_id)
    {
      if (_context.CoffeeBagItems == null)
      {
        return NotFound();
      }
      var CoffeeBags = await _context.CoffeeBagItems.Where(r => r.User_Id == user_id).ToListAsync();
      if (CoffeeBags == null)
      {
        return NotFound();
      }
      return Ok(CoffeeBags);
    }

    //GET: api/CoffeeBagItems/{id} get a coffee bag by id
    [HttpGet("{id}")]
    public async Task<ActionResult<IEnumerable<CoffeeBagItem>>> GetCoffeeBagById(int id)
    {
      if (_context.CoffeeBagItems == null) { return NotFound(); }
      var CoffeeBag = await _context.CoffeeBagItems.Where(r => r.Id == id).ToListAsync();
      if (CoffeeBag == null)
      {
        return NotFound();
      }
      return Ok(CoffeeBag);
    }

    //PUT: api/CoffeeBagItems/{id} , update Coffee Bag by id
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateCoffeeBagInfo(int id, CoffeeBagItem CoffeeBagInfo)
    {
      var existingCoffeeBag = await _context.CoffeeBagItems.AsNoTracking().FirstOrDefaultAsync(m => m.Id == id);
      if (existingCoffeeBag == null)
      {
        return NotFound();
      }
      if (id != CoffeeBagInfo.Id)
      {
        return BadRequest();
      }

      // Use the injected UserInfoItemsController to call the GetUserById method
      var user = await _userInfoController.GetUserById(existingCoffeeBag.User_Id);
      if (user == null)
      {
        return NotFound();
      }

      // Verify that the user has permission to update the object
      if (user.Value?.Id != CoffeeBagInfo.User_Id)
      {
        return Unauthorized();
      }
      _context.Entry(CoffeeBagInfo).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!CoffeeBagExists(CoffeeBagInfo.User_Id))
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
    //POST api/CoffeeBagItems , add a Coffee Bag
    [HttpPost]
    public async Task<ActionResult<CoffeeBagItem>> AddCoffeeBag(CoffeeBagItem CoffeeBagItem)
    {
      var newCoffeeBagItem = new CoffeeBagItem();
      newCoffeeBagItem = CoffeeBagItem;
      if (_context.CoffeeBagItems == null)
      {
        return Problem("Entity set 'CoffeeBagContext.CoffeeBagItems' is null");
      }
      var user = await _userInfoController.GetUserById(newCoffeeBagItem.User_Id);
      if (user == null)
      {
        return NotFound();
      }

      // Verify that the user has permission to update the object
      if (user.Value?.Id != newCoffeeBagItem.User_Id)
      {
        return Unauthorized();
      }
      _context.CoffeeBagItems.Add(newCoffeeBagItem);
      await _context.SaveChangesAsync();
      return CreatedAtAction(nameof(GetCoffeeBagById), new { id = newCoffeeBagItem.Id }, newCoffeeBagItem);
    }
    //DELETE api/CoffeeBagItems/{id} delete a Coffee Bag
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteCoffeeBag(int id)
    {
      if (_context.CoffeeBagItems == null)
      {
        return NotFound();
      }
      var CoffeeBagInfo = await _context.CoffeeBagItems.FindAsync(id);
      if (CoffeeBagInfo == null)
      {
        return NotFound();
      }
      _context.CoffeeBagItems.Remove(CoffeeBagInfo);
      await _context.SaveChangesAsync();

      return NoContent();
    }
    //does the coffee bag exist in the database?
    private bool CoffeeBagExists(int id)
    {
      return (_context.CoffeeBagItems?.Any(e => e.Id == id)).GetValueOrDefault();
    }

  }
}

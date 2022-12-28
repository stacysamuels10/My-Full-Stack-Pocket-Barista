using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UserInfo.Models;
using UserInfoItems.Data;

namespace UserInfo.Controllers
{
    [Route("api/UserInfoItems")]
    [ApiController]
    public class UserInfoItemsController : ControllerBase
    {
      private readonly UserInfoContext _context;

      public UserInfoItemsController(UserInfoContext context)
      {
          _context = context;
      }
    // GET: api/UserInfoItems , get all users
    [HttpGet]
    public async Task<ActionResult<IEnumerable<UserInfoItem>>> GetAllUsers()
    {
      if (_context.UserInfoItems == null)
      {
        return NotFound();
      }
      return await _context.UserInfoItems.ToListAsync();
    }
    // GET: api/UserInfoItems/{id}, get user by id
    [HttpGet("{id}")]
    public async Task<ActionResult<UserInfoItem>> GetUserById(int id)
    {
      if (_context.UserInfoItems == null)
      {
        return NotFound();
      }
      var userExists = await _context.UserInfoItems.AnyAsync(u => u.Id == id);
      if (userExists == false)
      {
        return NotFound();
      }
      var UserInfo = await _context.UserInfoItems.FindAsync(id);
      return UserInfo;
    }
    // PUT: api/UserInfoItems/{id} , update user info
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateUser(int id, UserInfoItem userInfo)
    {
      if (id != userInfo.Id)
      {
        return BadRequest();
      }
      _context.Entry(userInfo).State = EntityState.Modified;
      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!UserExists(id))
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
    // POST: api/UserInfoItems add new user
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<ActionResult<UserInfoItem>> AddUser(UserInfoItem userInfo)
    {
      if (_context.UserInfoItems == null)
      {
        return Problem("Entity set 'UserContext.UserInfoItems' is null.");
      }
      var emailExists = await _context.UserInfoItems.AnyAsync(u => u.email == userInfo.email);
      if (emailExists == false)
      {
        _context.UserInfoItems.Add(userInfo);
        await _context.SaveChangesAsync();
      return CreatedAtAction(nameof(GetUserById), new { id = userInfo.Id }, userInfo);
      }
      return Problem("A user with this email already exists");
    }
    // DELETE: api/UserInfoItems/{id} , delete user by id
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteUser(int id)
    {
      if (_context.UserInfoItems == null)
      {
        return NotFound();
      }
      var userExists = await _context.UserInfoItems.AnyAsync(u => u.Id == id);
        if (userExists == false)
      {
        return NotFound();
      }
      var UserInfo = await _context.UserInfoItems.FindAsync(id);
      _context.UserInfoItems.Remove(UserInfo);
      await _context.SaveChangesAsync();
      return NoContent();
    }
    private bool UserExists(int id)
    {
      return (_context.UserInfoItems?.Any(e => e.Id == id)).GetValueOrDefault();
    }
  }}

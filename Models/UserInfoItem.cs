using Grinder.Models;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace UserInfo.Models;

public class UserInfoItem
{
  [Key]
  public int Id { get; set; }
  public string? email { get; set; }
  public string? username { get; set; }
  public string? password { get; set; }

  internal bool Any()
  {
    throw new NotImplementedException();
  }
}

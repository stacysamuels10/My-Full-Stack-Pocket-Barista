using Microsoft.Build.Framework;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations.Schema;
using UserInfo.Models;

namespace Grinder.Models;

public class GrinderItem
{
  [Required]
  public int Id { get; set; }

  [ForeignKey("UserInfoItem")]
  public int User_Id { get; set; }
  public string? Name { get; set;}
  public string? Brand { get; set;}

}
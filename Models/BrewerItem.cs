using Newtonsoft.Json;
using Microsoft.Build.Framework;
using System.ComponentModel.DataAnnotations.Schema;
using UserInfo.Models;

namespace Brewer.Models;

public class BrewerItem
{
  [Required]
  public int Id { get; set; }
  [ForeignKey("UserInfoItem")]
  public int User_Id { get; set; }
  public string? Name { get; set; }
  public string? Brand { get; set; }
  public string? Type { get; set; }
}
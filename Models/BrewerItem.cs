using Newtonsoft.Json;
using Microsoft.Build.Framework;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using UserInfo.Models;

namespace Brewer.Models;

public class BrewerItem
{
  [Key]
  public int Id { get; set; }
  [ForeignKey("UserInfoItem")]
  public int User_Id { get; set; }
  public string? Name { get; set; }
  public string? Brand { get; set; }
  public string? Type { get; set; }
}
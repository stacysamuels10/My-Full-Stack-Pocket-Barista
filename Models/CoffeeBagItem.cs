using Newtonsoft.Json;
using Microsoft.Build.Framework;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using UserInfo.Models;

namespace CoffeeBag.Models;

public class CoffeeBagItem
{
  [Key]
  public int Id { get; set; }
  [ForeignKey("UserInfoItem")]
  public int User_Id { get; set; }
  public string? Coffee_Name { get; set; }
  public string? Roaster_Name { get; set; }
  public string? Bean_Origin { get; set; }

  public int? User_Rating { get; set; }
  public string? Bean_Type { get; set; }
  public string? Roast_Level { get; set; }
  public string? Bean_Process { get; set; }
  public string? Bag_Size { get; set; }
  public string? Roast_Date { get; set; }
  public string? Notes { get; set; }
}
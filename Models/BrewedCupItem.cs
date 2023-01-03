using Newtonsoft.Json;
using Microsoft.Build.Framework;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using UserInfo.Models;

namespace BrewedCup.Models;

public class BrewedCupItem
{
  [Key]
  public int Id { get; set; }
  [ForeignKey("UserInfoItem")]
  public int User_Id { get; set; }
  [ForeignKey("CoffeeBagItem")]
  public int? Coffee_Id { get; set; }
  [ForeignKey("GrinderItem")]
  public int? Grinder_Id { get; set; }
  [ForeignKey("BrewerItem")]
  public int? Brewer_Id { get; set; }
  public string? Date_Of_Brew { get; set; }
  public string? Grounds_Amount { get; set; }
  public string? Grind_Setting { get; set; }
  public string? Water_Amount { get; set; }
  public string? Water_Temp { get; set; }
  public string? Brew_Time { get; set; }
  public int? Rating { get; set; }
  public string? Notes { get; set; }
}
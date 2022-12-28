using Newtonsoft.Json;
using Microsoft.Build.Framework;
using System.ComponentModel.DataAnnotations.Schema;
using UserInfo.Models;

namespace BrewedCup.Models;

public class BrewedCupItem
{
  [Required]
  public int Id { get; set; }
  [ForeignKey("UserInfoItem")]
  public int User_Id { get; }
  [ForeignKey("CoffeeBagItem")]
  public int CoffeeBag_Id { get; }
  [ForeignKey("GrinderItem")]
  public int Grinder_Id { get; }
  [ForeignKey("BrewerItem")]
  public int Brewed_Id { get; }
  public string? Grounds_Amount { get; set; }
  public string? Grind_Setting { get; set; }
  public string? Water_Amount { get; set; }
  public string? Water_Temp { get; set; }
  public string? Brew_Time { get; set; }
  public int? Rating { get; set; }
  public string? Notes { get; set; }
}
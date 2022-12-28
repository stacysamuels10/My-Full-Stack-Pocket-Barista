using Microsoft.EntityFrameworkCore;
using BrewedCup.Models;

namespace BrewedCupItems.Data;

public class BrewedCupContext : DbContext
{
  public BrewedCupContext(DbContextOptions<BrewedCupContext> options) 
    : base(options)
  { }

  public DbSet<BrewedCupItem> BrewedCupItems { get; set; }

  protected override void OnModelCreating(ModelBuilder modelBuilder)
  {
    modelBuilder.Entity<BrewedCupItem>().ToTable("brewed_cup");
  }
}
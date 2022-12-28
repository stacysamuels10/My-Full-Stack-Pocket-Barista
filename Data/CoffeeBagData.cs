using Microsoft.EntityFrameworkCore;
using CoffeeBag.Models;

namespace CoffeeBagItems.Data;

public class CoffeeBagContext : DbContext
{
  public CoffeeBagContext(DbContextOptions<CoffeeBagContext> options)
    : base(options)
  { }
  public DbSet<CoffeeBagItem> CoffeeBagItems { get; set; }

  protected override void OnModelCreating(ModelBuilder modelBuilder)
  {
    modelBuilder.Entity<CoffeeBagItem>().ToTable("coffee_table");
  }
}
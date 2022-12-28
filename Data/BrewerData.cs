using Microsoft.EntityFrameworkCore;
using Brewer.Models;

namespace BrewerItems.Data;

public class BrewerContext : DbContext
{
  public BrewerContext(DbContextOptions<BrewerContext> options)
    : base(options)
  { }
  public DbSet<BrewerItem> BrewerItems { get; set; }

  protected override void OnModelCreating(ModelBuilder modelBuilder)
  {
    modelBuilder.Entity<BrewerItem>().ToTable("brewer");
  }
}
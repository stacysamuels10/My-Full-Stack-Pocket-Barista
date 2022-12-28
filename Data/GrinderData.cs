using Microsoft.EntityFrameworkCore;
using Grinder.Models;

namespace GrinderItems.Data;

public class GrinderContext : DbContext
{
  public GrinderContext(DbContextOptions<GrinderContext> options)
    : base(options)
  { }

  public DbSet<GrinderItem> GrinderItems { get; set; }

  protected override void OnModelCreating(ModelBuilder modelBuilder)
  {
    modelBuilder.Entity<GrinderItem>().ToTable("grinder");
  }
}
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer;
using UserInfo.Models;

namespace UserInfoItems.Data;

public class UserInfoContext : DbContext
{
  public UserInfoContext(DbContextOptions<UserInfoContext> options)
      : base(options)
  {
  }

  public DbSet<UserInfoItem> UserInfoItems { get; set; }
  protected override void OnModelCreating(ModelBuilder modelBuilder)
  {
    modelBuilder.Entity<UserInfoItem>().ToTable("user_table");
  }
}
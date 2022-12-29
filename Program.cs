using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.Configuration;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Hosting;
using UserInfo.Models;
using UserInfoItems.Data;
using GrinderItems.Data;
using BrewerItems.Data;
using UserInfo.Controllers;
using CoffeeBagItems.Data;
using BrewedCupItems.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<UserInfoContext>(options =>
        options.UseSqlServer(builder.Configuration.GetConnectionString("TrainingSrsConnection")));
builder.Services.AddDbContext<GrinderContext>(options =>
        options.UseSqlServer(builder.Configuration.GetConnectionString("TrainingSrsConnection")));
builder.Services.AddDbContext<BrewerContext>(options =>
        options.UseSqlServer(builder.Configuration.GetConnectionString("TrainingSrsConnection")));
builder.Services.AddDbContext<CoffeeBagContext>(options =>
        options.UseSqlServer(builder.Configuration.GetConnectionString("TrainingSrsConnection")));
builder.Services.AddDbContext<BrewedCupContext>(options =>
        options.UseSqlServer(builder.Configuration.GetConnectionString("TrainingSrsConnection")));

builder.Services.AddCors(options =>
{
  options.AddPolicy("CorsPolicy",
      builder => builder
          .WithOrigins("https://localhost:44430")
          .AllowAnyMethod()
          .AllowAnyHeader()
          .AllowCredentials());
});

builder.Services.AddScoped<UserInfoItemsController>();

builder.Services.AddEndpointsApiExplorer();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseCors("CorsPolicy");


//user routes
app.MapControllerRoute(
    name: "user-get-all",
    pattern: "api/UserInfoItems");
app.MapControllerRoute(
    name: "user-get-by-id",
    pattern: "api/UserInfoItems/{id?}");
app.MapControllerRoute(
    name: "user-put-update",
    pattern: "api/UserInfoItems/{id?}");
app.MapControllerRoute(
    name: "user-post-add-new",
    pattern: "api/UserInfoItems");
app.MapControllerRoute(
    name: "user-delete-by-id",
    pattern: "api/UserInfoItems/{id?}");
//grinder routes
app.MapControllerRoute(
    name: "grinder-get-all-by-user",
    pattern: "api/GrinderItems/all/{user_id?}");
app.MapControllerRoute(
    name: "grinder-get-by-id",
    pattern: "api/GrinderItems/{id?}");
app.MapControllerRoute(
    name: "grinder-put-update",
    pattern: "api/GrinderItems/{id?}");
app.MapControllerRoute(
    name: "grinder-post-add-new",
    pattern: "api/GrinderItems");
app.MapControllerRoute(
    name: "grinder-delete-by-id",
    pattern: "api/GrinderItems/{id?}");
//brewer routes
app.MapControllerRoute(
    name: "brewer-get-all-by-user",
    pattern: "api/BrewerItems/all/{user_id?}");
app.MapControllerRoute(
    name: "brewer-get-by-id",
    pattern: "api/BrewerItems/{id?}");
app.MapControllerRoute(
    name: "brewer-put-update",
    pattern: "api/BrewerItems/{id?}");
app.MapControllerRoute(
    name: "brewer-post-add-new",
    pattern: "api/BrewerItems");
app.MapControllerRoute(
    name: "brewer-delete-by-id",
    pattern: "api/BrewerItems/{id?}");
//coffee bag routes
app.MapControllerRoute(
    name: "coffee-bag-get-all-by-user",
    pattern: "api/CoffeeBagItems/all/{user_id?}");
app.MapControllerRoute(
    name: "coffee-bag-get-by-id",
    pattern: "api/CoffeeBagItems/{id?}");
app.MapControllerRoute(
    name: "coffee-bag-put-update",
    pattern: "api/CoffeeBagItems/{id?}");
app.MapControllerRoute(
    name: "coffee-bag-post-add-new",
    pattern: "api/CoffeeBagItems");
app.MapControllerRoute(
    name: "coffee-bag-delete-by-id",
    pattern: "api/CoffeeBagItems/{id?}");
//brewed cup routes
app.MapControllerRoute(
    name: "brewed-cup-get-all-by-user",
    pattern: "api/BrewedCupItems/all/{user_id?}");
app.MapControllerRoute(
    name: "brewed-cup-get-by-id",
    pattern: "api/BrewedCupItems/{id?}");
app.MapControllerRoute(
    name: "brewed-cup-put-update",
    pattern: "api/BrewedCupItems/{id?}");
app.MapControllerRoute(
    name: "brewed-cup-post-add-new",
    pattern: "api/BrewedCupItems");
app.MapControllerRoute(
    name: "brewed-cup-delete-by-id",
    pattern: "api/BrewedCupItems/{id?}");


//app.MapFallbackToFile("index.html");

app.Run();

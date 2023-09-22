using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllersWithViews();

builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Your API", Version = "v1" });
});

builder.Services.AddHttpClient<NpsClient>(client =>
{
    client.BaseAddress = new Uri("https://developer.nps.gov/api/v1/");
});

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();
app.UseAuthorization();

app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Your API v1");
});

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.MapGet("/api/parks", async (NpsClient npsClient) =>
{
    try
    {
        var response = await npsClient.GetParksAsync();

        return Results.Ok(response);
    }
    catch (HttpRequestException ex)
    {
        return Results.BadRequest($"Request error: {ex.Message}");
    }
});

app.Run();

public class NpsClient
{
    private readonly HttpClient _httpClient;

    public NpsClient(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }

    public async Task<NpsResponse> GetParksAsync()
    {
        var apiKey = "QDzPwbDBoLdn0Sy95L6Rfl59LXnt4BmefytYHaBu"; 
        var apiUrl = $"parks?api_key={apiKey}";

        var response = await _httpClient.GetFromJsonAsync<NpsResponse>(apiUrl);

        return response;
    }
}

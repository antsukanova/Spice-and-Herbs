using Microsoft.AspNetCore.Blazor.Builder;
using Microsoft.AspNetCore.Blazor.Services;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;
using System.Net.Http;

namespace SpiceApplication.App
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            if (services.All(x => x.ServiceType != typeof(HttpClient)))
            {
                services.AddScoped<HttpClient>(s =>
                {
                    var uriHelper = s.GetRequiredService<IUriHelper>();
                    return new HttpClient
                    {
                        BaseAddress = new Uri(uriHelper.GetBaseUri())
                    };
                });
            }
        }

        public void Configure(IBlazorApplicationBuilder app) =>
            app.AddComponent<App>(nameof(app));
    }
}

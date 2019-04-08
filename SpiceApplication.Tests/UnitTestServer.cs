using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.TestHost;
using SpiceApplication.Server;
using SpiceApplication.Server.Controllers;
using SpiceApplication.Server.DataAccess;
using SpiceApplication.Shared.Models;
using Xunit;
using Xunit.Abstractions;

namespace SpiceApplication.Tests
{
    public class UnitTestServer
    {
        private readonly ITestOutputHelper output;
        private readonly SpiceController _controller;
        private readonly TestServer _factory;
        
        public UnitTestServer(ITestOutputHelper output)
        {
            _controller = new SpiceController();
            _factory = new TestServer(WebHost.CreateDefaultBuilder().UseStartup<Startup>());

            this.output = output;
        }
        //            output.WriteLine(result.GetType());

        [Fact]
        public void ShouldResolveSpicesNotEmpty()
        {
            var result = _controller.GetSpices();

            Assert.NotEmpty(result);
        }

        [Fact]
        public void ShouldResolveSpicesType()
        {
            var result = _controller.GetSpices();

            Assert.IsAssignableFrom<IEnumerable<Spice>>(result);
        }

        [Fact]
        public void ShouldResolveDatabaseConfig()
        {
            var result = new SpiceContext();

            Assert.True(result.Database.IsSqlServer());
            Assert.Equal(@"Server=(localdb)\MSSQLLocalDB;Database=SpiceDB;Trusted_Connection=True;",
                result.Database.GetDbConnection().ConnectionString);
        }

        [Theory]
        [InlineData("/")]
        [InlineData("/blazor")]
        [InlineData("/react")]
        [InlineData("/vue")]
        [InlineData("/api/spices")]
        public async Task ShouldResolveEndpointsReturnSuccessAndCorrectContentType(string url)
        {
            var client = _factory.CreateClient();
            var response = await client.GetAsync(url);
            
            response.EnsureSuccessStatusCode();
            Assert.Equal(
                url.Equals("/api/spices") ? "application/json; charset=utf-8" : "text/html",
                response.Content.Headers.ContentType.ToString());
        }
    }
}

using System.Threading.Tasks;
using AngleSharp.Html.Parser;
using Microsoft.AspNetCore;
using Xunit;
using Xunit.Abstractions;
using Microsoft.AspNetCore.Blazor.Hosting;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.TestHost;
using SpiceApplication.Server;

namespace SpiceApplication.Tests
{
    public class UnitTestClient
    {
        private readonly ITestOutputHelper output;
        private readonly TestServer _factory;

        public UnitTestClient(ITestOutputHelper output)
        {
            _factory = new TestServer(WebHost.CreateDefaultBuilder().UseStartup<Startup>());
            this.output = output;
        }

        [Theory]
        [InlineData("/")]
        public async Task ShouldResolveHtmlAttributes(string url)
        {
            var client = _factory.CreateClient();
            var response = await client.GetAsync(url);
            var content = response.Content.ReadAsStringAsync().Result;

            using (var document = new HtmlParser().ParseDocument(content))
            {
                Assert.Equal(
                    "en",
                    document.QuerySelector("html").GetAttribute("lang"));
                Assert.NotEmpty(document.GetElementsByTagName("app"));
                output.WriteLine(content);
            }
        }
    }
}

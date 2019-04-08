using System.Collections.Generic;
using SpiceApplication.Server.DataAccess;
using SpiceApplication.Shared.Models;
using Microsoft.AspNetCore.Mvc;

namespace SpiceApplication.Server.Controllers
{
    public class SpiceController : Controller
    {
        private readonly SpiceDataAccessLayer _spices = new SpiceDataAccessLayer();

        [Route("api/spices")]
        [HttpGet]
        public IEnumerable<Spice> GetSpices() => _spices.GetAllSpices();
    }
}
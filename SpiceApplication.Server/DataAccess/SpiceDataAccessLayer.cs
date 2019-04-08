using System;
using SpiceApplication.Shared.Models;
using System.Collections.Generic;

namespace SpiceApplication.Server.DataAccess
{
    public class SpiceDataAccessLayer
    {
        private readonly SpiceContext _db = new SpiceContext();

        public IEnumerable<Spice> GetAllSpices()
        {
            try
            {
                return _db.Spice;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
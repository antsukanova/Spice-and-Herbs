using System;
using SpiceApplication.Shared.Models;
using Microsoft.EntityFrameworkCore;

namespace SpiceApplication.Server.DataAccess
{
    public class SpiceContext : DbContext
    {
        public virtual DbSet<Spice> Spice { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(@"Server=(localdb)\MSSQLLocalDB;Database=SpiceDB;Trusted_Connection=True;",
                    opts => opts.CommandTimeout((int?) TimeSpan.FromMinutes(1).TotalSeconds));

            }
        }
    }
}
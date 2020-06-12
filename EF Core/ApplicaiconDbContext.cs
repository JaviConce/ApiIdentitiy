using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace EF_Core
{
    class ApplicaiconDbContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(""
                //@"Server=(localdb)\mssqllocaldb;Database=Blogging;Integrated Security=True"
);
        }

        public DbSet<OrdenServicio> Ordenes { get; set; }
    }
}

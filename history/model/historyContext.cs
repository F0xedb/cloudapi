using System;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace history.model
{
    public class historyContext : DbContext
    {
        public historyContext(DbContextOptions<historyContext> options)
            : base(options)
        {
        }

        public DbSet<historymodel> HistoryItems { get; set; }
    }
}

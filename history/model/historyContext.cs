using System;
using Microsoft.EntityFrameworkCore;

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

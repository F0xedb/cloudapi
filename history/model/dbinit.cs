using System;
using System.Linq;

namespace history.model
{
    public class dbinit
    {
        public static void init(historyContext context)
        {
            context.Database.EnsureCreated();

            if (!context.HistoryItems.Any())
            {
                // Create a new HistoryItem if collection is empty,
                // which means you can't delete all TodoItems.
                context.HistoryItems.Add(new historymodel("Test1", "https://www.google.com"));
                context.SaveChanges();
            }
        }

    }
}

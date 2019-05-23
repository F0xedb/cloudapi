using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using history.model;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Cors;

namespace history.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class HistoryController : ControllerBase
    {

        private readonly historyContext _context;

        public HistoryController(historyContext context)
        {
            _context = context;

            if (_context.HistoryItems.Count() == 0)
            {
                // Create a new HistoryItem if collection is empty,
                // which means you can't delete all TodoItems.
                _context.HistoryItems.Add(new historymodel("Test1", "https://www.google.com"));
                _context.SaveChanges();
            }
        }


        // GET: api/v1/history
        [HttpGet]
        public async Task<ActionResult<IEnumerable<historymodel>>> GetHistoryItems()
        {
            return await _context.HistoryItems.ToListAsync();
        }

        // GET: api/Todo/5
        [HttpGet("{id}")]
        public async Task<ActionResult<historymodel>> GetHistoryItem(long id)
        {
            var historyItem = await _context.HistoryItems.FindAsync(id);

            if (historyItem == null)
            {
                return NotFound();
            }

            return historyItem;
        }

        // POST: api/Todo
        [HttpPost]
        public async Task<ActionResult<historymodel>> PostHistoryItem(historymodel item)
        {
            _context.HistoryItems.Add(item);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetHistoryItem), new { id = item.id }, item);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<historymodel>> DeleteHistoryItem(long id)
        {
            var history = _context.HistoryItems.Find(id);
            _context.HistoryItems.Remove(history);
            await _context.SaveChangesAsync();

            return history;
        }
    }
}

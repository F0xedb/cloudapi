using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using history.model;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Authorization;


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
        }

        private string getUserId()
        {
            return Request.Headers["id"];
        }


        // GET: api/v1/history
        [Authorize]

        [HttpGet]
        public List<historymodel> GetHistoryItems(string name, int? page, int length = 5)
        {
            IQueryable<historymodel> query = _context.HistoryItems;
            query = query.Where(h => h.userid == getUserId());
            if (!string.IsNullOrWhiteSpace(name))
                query = query.Where(h => h.name.ToLower().Contains(name.ToLower()) || h.url.ToLower().Contains(name.ToLower()));

            if (page.HasValue)
                return query.Skip(page.Value * length).Take(length).ToList();

            return query.Take(length).ToList();
        }

        // GET: api/v1/history/5
        [Authorize]

        [HttpGet("{id}")]
        public List<historymodel> GetHistoryItem(long id)
        {
            IQueryable<historymodel> query = _context.HistoryItems;
            query = query.Where(h => h.userid == getUserId()).Where(h => h.id == id);


            return query.ToList();
        }

        // POST: api/v1/history
        [Authorize]
        [HttpPost]
        public async Task<ActionResult<historymodel>> PostHistoryItem(historymodel item)
        {
            item.userid = getUserId();
            _context.HistoryItems.Add(item);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetHistoryItem), new { id = item.id }, item);
        }
        //DELETE: api/v1/history
        [Authorize]
        [HttpDelete("{id}")]
        public async Task<ActionResult<historymodel>> DeleteHistoryItem(long id)
        {
            var history = _context.HistoryItems.Find(id);
            if (history.userid == getUserId())
            {
                _context.HistoryItems.Remove(history);
            }
            else
            {
                return NotFound();
            }
            await _context.SaveChangesAsync();

            return history;
        }

        [HttpPut()]
        [Authorize]
        public async Task<ActionResult<historymodel>> PutHistoryItem(historymodel item)
        {

            var existingitem = _context.HistoryItems.Where(s => s.id == item.id).Where(s => s.userid == getUserId()).FirstOrDefault<historymodel>();

            if (existingitem != null)
            {
                existingitem.url = item.url;
                existingitem.name = item.name;

                _context.SaveChanges();
            }
            else
            {
                return NotFound();
            }
            return Ok();
        }

    }
}

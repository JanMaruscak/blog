using System.Collections.Generic;
using System.Threading.Tasks;
using blog.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace blog.Controllers
{
    [Route("api/tags")]
    public class TagController : ControllerBase
    {
        private readonly DbContext _context;
        public TagController(DbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Tag>>> GetTags()
        {
            return await _context.Tags.Include(x=>x.Articles).ToListAsync();
        }

        // GET: api/tags/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Tag>> GetTag(int id)
        {
            var tag = await _context.Tags.Include(x => x.Articles).FirstAsync(x => x.Id == id);

            if (tag == null)
            {
                return NotFound();
            }

            return tag;
        }

        [HttpPost]
        public async Task<ActionResult<Tag>> AddTag([FromBody] Tag tag)
        {
            if (tag == null)
            {
                return null;
            }

            _context.Tags.Add(tag);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTag", new {id = tag.Id}, tag);
        }
    }
}
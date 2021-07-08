using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using blog.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace blog.Controllers
{
    [Route("api/blogs")]
    public class BlogController : ControllerBase
    {
        private readonly DbContext _context;

        public BlogController(DbContext context)
        {
            _context = context;
        }

        // GET: api/Blogs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Article>>> GetArticles()
        {
            return await _context.Articles.ToListAsync();
        }

        // GET: api/Blogs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Article>> GetArticle(int id)
        {
            var article = await _context.Articles.FindAsync(id);

            if (article == null)
            {
                return NotFound();
            }

            return article;
        }

        // GET: api/Blogs
        [HttpPost]
        public async Task<ActionResult<Article>> PostArticle([FromBody] Article article)
        {
            if (article == null)
            {
                return null;
            }
            _context.Articles.Add(article);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetArticle", new { id = article.Id }, article);
        }

        // GET: api/Blogs/edit
        [HttpPost]
        [Route("/edit")]
        public async void EditArticle([FromBody] Article article)
        {
            if (article == null)
            {
                return;
            }

            Article temp = _context.Articles.FindAsync(article.Id).Result;
            _context.Entry(temp).CurrentValues.SetValues(article);
            await _context.SaveChangesAsync();

            // CreatedAtAction("GetArticle", new {id = article.Id}, article);
        }
    }
}
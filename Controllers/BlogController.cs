using System;
using System.Collections.Generic;
using System.Linq;
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
            return await _context.Articles.Include(x => x.Tags).ToListAsync();
        }

        // GET: api/Blogs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Article>> GetArticle(int id)
        {
            var article = await _context.Articles.Include(x => x.Tags).FirstAsync(x => x.Id == id);

            if (article == null)
            {
                return NotFound();
            }

            return article;
        }

        [Route("/loll")]
        private async Task<ActionResult<Tag>> GetTag(int id)
        {
            var tag = await _context.Tags.FindAsync(id);

            if (tag == null)
            {
                return NotFound();
            }

            return tag;
        }

        [Route("/bytag/{tag}")]
        public async Task<ActionResult<List<Article>>> GetTagsByTag(string tag)
        {
            var articles = _context.Articles.Include(a => a.Tags).Where(a => a.Tags.Any(t => t.Value == tag)).ToList();

            return articles;
        }


        // GET: api/Blogs
        [HttpPost]
        public async Task<ActionResult<Article>> PostArticle([FromBody] Article article)
        {
            if (article == null)
            {
                return null;
            }

            int done = 0;
            List<int> IdsToRemove = new List<int>();
            List<int> IdsToAdd = new List<int>();
            foreach (var tag in _context.Tags)
            {
                if (article.Tags.Any(x => x.Value == tag.Value))
                {
                    var oldId = article.Tags.Find(x => x.Value == tag.Value).Id;
                    IdsToRemove.Add(oldId);
                    IdsToAdd.Add(tag.Id);
                    done++;
                }
                if(done == article.Tags.Count) break;
            }

            foreach (var id in IdsToRemove)
            {
                article.Tags.Remove(article.Tags.First(x=>x.Id==id));
            }
            
            _context.Articles.Add(article);
            await _context.SaveChangesAsync();


            foreach (var id in IdsToAdd)
            {
                var tag = GetTag(id).Result.Value;
                var article2 = GetArticle(article.Id).Result.Value;
                if (tag.Articles == null)
                {
                    tag.Articles = new List<Article>() {article2 };
                }
                article2.Tags.Add(tag);
            }

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetArticle", new { id = article.Id }, article);
        }

        // GET: api/Blogs/edit
        [HttpPost]
        [Route("/edit")]
        public async Task<ActionResult<Article>> EditArticle([FromBody] Article article)
        {
            if (article == null)
            {
                return null;
            }

            Article temp = _context.Articles.Include(x => x.Tags).First(x => x.Id == article.Id);

            List<int> IdsToRemove = new List<int>();
            foreach (var tempTag in temp.Tags)
            {
                if (!article.Tags.Contains(tempTag))
                {
                    IdsToRemove.Add(tempTag.Id);
                }
            }

            foreach (var id in IdsToRemove)
            {
                temp.Tags.Remove(GetTag(id).Result.Value);
            }

            
            int done = 0;
            IdsToRemove = new List<int>();
            var TagsToRemove = new List<string>();
            List<int> IdsToAdd = new List<int>();
            foreach (var tag in _context.Tags)
            {
                if (article.Tags.Any(x => x.Value == tag.Value))
                {
                    var oldValue = article.Tags.Find(x => x.Value == tag.Value).Value;
                    TagsToRemove.Add(oldValue);
                    IdsToAdd.Add(tag.Id);
                    done++;
                }
                if(done == article.Tags.Count) break;
            }

            foreach (var value in TagsToRemove)
            {
                article.Tags.Remove(article.Tags.First(x=>x.Value == value));
            }

            
            _context.Entry(temp).CurrentValues.SetValues(article);
            await _context.SaveChangesAsync();

            foreach (var id in IdsToAdd)
            {
                var tag = GetTag(id).Result.Value;
                var article2 = GetArticle(article.Id).Result.Value;
                if (tag.Articles == null)
                {
                    tag.Articles = new List<Article>() {article2};
                }

                article2.Tags.Add(tag);
            }

            await _context.SaveChangesAsync();
            
            return CreatedAtAction("GetArticle", new {id = article.Id}, article);
        }

        [HttpPost("{id}")]
        public async Task RemoveArticle(int id)
        {
            var article = GetArticle(id).Result.Value;
            _context.Articles.Remove(article);
            await _context.SaveChangesAsync();
        }
    }
}
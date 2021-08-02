using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using blog.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;

namespace blog.Controllers
{
    [Route("api/articles")]
    public class ArticleController : ControllerBase
    {
        private readonly DbContext _context;

        public ArticleController(DbContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Get all articles
        /// </summary>
        /// <param name="id">Id článku</param>
        /// <returns>Detail článku</returns>
        // GET: api/articles
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Article>>> GetArticles()
        {
            return await _context.Articles.Include(x => x.Tags).ToListAsync();
        } 

        // Post: api/articles/query
        [HttpPost("query")]
        public async Task<ActionResult<IEnumerable<Article>>> GetArticlesByQuery([FromBody] string query)
        {
            var result = _context.Articles.Include(x => x.Tags).Where(x => x.Title.Contains(query));
            return result.ToList();
        }

        /// <summary>
        /// Get article
        /// </summary>
        /// <param name="id">Id článku</param>
        /// <returns>Detail článku</returns>
        // GET: api/articles/5
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

        [Route("/tag/{id}")]
        [HttpGet]
        private async Task<ActionResult<Tag>> GetTag(int id)
        {
            var tag = await _context.Tags.FindAsync(id);

            if (tag == null)
            {
                return NotFound();
            }

            return tag;
        }

        /// <summary>
        /// Get articles by tag
        /// </summary>
        /// <param name="tag"></param>
        /// <returns></returns>
        [Route("/bytag/{tag}")]
        [HttpGet]
        public ActionResult<List<Article>> GetArticlesByTag(string tag)
        {
            return _context.Articles.Include(a => a.Tags).Where(a => a.Tags.Any(t => t.Value == tag)).ToList();
        }

        /// <summary>
        /// Post article
        /// </summary>
        /// <returns></returns>
        // POST: api/articles
        [HttpPost]
        [Route("post")]
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

        /// <summary>
        /// Edit article
        /// </summary>
        /// <param name="id">Id článku</param>
        /// <returns>Detail článku</returns>
        // POST: api/articles/edit
        [HttpPost]
        [Route("edit")]
        public async Task<ActionResult<Article>> EditArticle([FromBody] Article article)
        {
            if (article == null)
            {
                return null;
            }

            foreach (var tag in article.Tags)
            {
                if (!_context.Tags.Any(x => x.Value == tag.Value))
                {
                    _context.Tags.Add(tag);
                }
            }

            await _context.SaveChangesAsync();

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

        /// <summary>
        /// Remove article
        /// </summary>
        /// <param name="id">Id článku</param>
        /// <returns></returns>
        // POST: api/articles/remove
        [HttpPost]
        [Route("remove")]
        public async Task RemoveArticle([FromBody] int id)
        {
            var article = GetArticle(id).Result.Value;
            _context.Articles.Remove(article);
            await _context.SaveChangesAsync();
        }
    }
}
using System.Collections.Generic;

namespace blog.Models
{
    public class Tag
    {
        public int Id { get; set; }
        public string Value { get; set; }
        private List<int> ArticleIds { get; set; }
    }
}
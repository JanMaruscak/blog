using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace blog.Models
{
    public class Article
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public List<Tag> Tags { get; set; }
        public DateTime Created { get; set; }
        public string ImgUrl { get; set; }
        public string Author { get; set; }
        public string Text { get; set; }
    }
}
using System;
using System.Collections.Generic;

namespace blog.Models
{
    public class Article
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public List<Tag> Tags { get; set; }
        public DateTime Created { get; set; }
        public string ImgUrl { get; set; }
        public List<Text> Texts { get; set; }
        public List<Image> Images { get; set; }
    }
}
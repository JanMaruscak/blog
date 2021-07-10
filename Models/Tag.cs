using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace blog.Models
{
    public class Tag
    {
        public int Id { get; set; }
        public string Value { get; set; }
        [JsonIgnore]
        public List<Article> Articles { get; set; }
    }
}
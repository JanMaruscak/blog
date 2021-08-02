using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace blog.Models
{
    public class Tag
    {
        /// <summary>
        /// Id
        /// </summary>
        public int Id { get; set; }
        /// <summary>
        /// Text value of the tag
        /// </summary>
        public string Value { get; set; }
        /// <summary>
        /// List of all articles that contain this tag
        /// </summary>
        [JsonIgnore]
        public List<Article> Articles { get; set; }
    }
}
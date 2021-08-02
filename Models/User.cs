using System;
using System.ComponentModel.DataAnnotations;

namespace blog.Models
{
    public class User
    {
        public string Username { get; set; }
        public string Password { get; set; }
        [Key]
        public string EmailAddress { get; set; }
        /// <summary>
        /// Date of account creation
        /// </summary>
        public DateTime Created { get; set; }
    }
}
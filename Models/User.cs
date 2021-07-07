using System;

namespace blog.Models
{
    public class User
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string EmailAddress { get; set; }
        public DateTime Created { get; set; }
    }
}
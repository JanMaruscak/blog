﻿using blog.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace blog
{
    public class DbContext : Microsoft.EntityFrameworkCore.DbContext
    {
        public DbSet<Article> Articles { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<User> Users { get; set; }

        public DbContext(DbContextOptions<DbContext> options)
            : base(options)
        { }
    }
}
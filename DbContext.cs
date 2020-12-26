using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace blog
{
    public class DbContext : Microsoft.EntityFrameworkCore.DbContext
    {
        private IdentityUser User;

        public DbContext(DbContextOptions<DbContext> options) : base() 
        {
            
        }
    }
}
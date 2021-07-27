using Microsoft.AspNetCore.Authorization;    
using Microsoft.AspNetCore.Mvc;    
using Microsoft.Extensions.Configuration;    
using Microsoft.IdentityModel.Tokens;    
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;    
using System.Text;
using blog.Migrations;
using blog.Models;

namespace blog.Controllers
{
    [Route("api/login")]    
    [ApiController]    
    public class LoginController : Controller    
    {    
        private IConfiguration _config;
        private DbContext _context;

        public LoginController(IConfiguration config, DbContext context)    
        {    
            _config = config;
            _context = context;
        }

        [Route("register")]
        [HttpPost]
        public IActionResult Register([FromBody] User register)
        {
            if (AddUser(register))
            {
                return Ok();
            }

            return BadRequest("User with same email address already exists.");
        }
        [AllowAnonymous]
        [HttpPost]
        public IActionResult Login([FromBody]User login)    
        {    
            IActionResult response = Unauthorized();    
            var user = AuthenticateUser(login);    

            if (user != null)    
            {    
                var tokenString = GenerateJSONWebToken(user);    
                response = Ok(new { token = tokenString });    
            }    

            return response;    
        }    

        private string GenerateJSONWebToken(User userInfo)    
        {    
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));    
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new List<Claim> {new Claim("UserName", userInfo.Username), new Claim("Email", userInfo.Password)};
            
            var token = new JwtSecurityToken(_config["Jwt:Issuer"],    
                _config["Jwt:Issuer"],    
                claims,    
                expires: DateTime.Now.AddMinutes(120),    
                signingCredentials: credentials);    

            return new JwtSecurityTokenHandler().WriteToken(token);    
        }    

        private User AuthenticateUser(User login)    
        {    
            User user = null;    

            //Validate the User Credentials    
            //Demo Purpose, I have Passed HardCoded User Information    
            if(_context.Users.Any(x=>x.EmailAddress==login.EmailAddress&&x.Username==login.Username&&x.Password==login.Password))
            {
                user = login;
            }
            return user;    
        }

        private bool AddUser(User register)
        {
            if (_context.Users.Any(x => x.EmailAddress == register.EmailAddress)) return false;
            
            _context.Users.Add(register);
            _context.SaveChanges();

            return true;

        }
    }    
}
using Microsoft.EntityFrameworkCore.Migrations;

namespace blog.Migrations
{
    public partial class perex : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Perex",
                table: "Articles",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Perex",
                table: "Articles");
        }
    }
}

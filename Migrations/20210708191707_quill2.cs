using Microsoft.EntityFrameworkCore.Migrations;

namespace blog.Migrations
{
    public partial class quill2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Content",
                table: "Tag",
                newName: "Value");

            migrationBuilder.AddColumn<string>(
                name: "Author",
                table: "Articles",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Text",
                table: "Articles",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Author",
                table: "Articles");

            migrationBuilder.DropColumn(
                name: "Text",
                table: "Articles");

            migrationBuilder.RenameColumn(
                name: "Value",
                table: "Tag",
                newName: "Content");
        }
    }
}

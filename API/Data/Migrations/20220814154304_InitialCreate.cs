using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Description = table.Column<string>(type: "TEXT", nullable: true),
                    Name = table.Column<string>(type: "TEXT", nullable: true),
                    Price = table.Column<long>(type: "INTEGER", nullable: false),
                    PictureUrlBlack = table.Column<string>(type: "TEXT", nullable: true),
                    PictureUrlBlue = table.Column<string>(type: "TEXT", nullable: true),
                    PictureUrlOrange = table.Column<string>(type: "TEXT", nullable: true),
                    PictureUrlRed = table.Column<string>(type: "TEXT", nullable: true),
                    PictureUrlWhite = table.Column<string>(type: "TEXT", nullable: true),
                    PlasticType = table.Column<string>(type: "TEXT", nullable: true),
                    ProductType = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Products");
        }
    }
}

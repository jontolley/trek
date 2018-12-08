using Microsoft.EntityFrameworkCore.Migrations;

namespace trek.api.Migrations
{
    public partial class AddSortOrderAndRequired : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsRequired",
                table: "PackingItems",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "SortOrder",
                table: "PackingItems",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "SortOrder",
                table: "Faqs",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsRequired",
                table: "PackingItems");

            migrationBuilder.DropColumn(
                name: "SortOrder",
                table: "PackingItems");

            migrationBuilder.DropColumn(
                name: "SortOrder",
                table: "Faqs");
        }
    }
}

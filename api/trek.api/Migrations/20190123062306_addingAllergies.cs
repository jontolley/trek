using Microsoft.EntityFrameworkCore.Migrations;

namespace trek.api.Migrations
{
    public partial class addingAllergies : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "GlutenAllergy",
                table: "Attendees",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "PeanutAllergy",
                table: "Attendees",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "GlutenAllergy",
                table: "Attendees");

            migrationBuilder.DropColumn(
                name: "PeanutAllergy",
                table: "Attendees");
        }
    }
}

using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace trek.api.Migrations
{
    public partial class addAttendee : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Attendees",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    IsAdult = table.Column<bool>(nullable: false),
                    FirstName = table.Column<string>(maxLength: 100, nullable: false),
                    LastName = table.Column<string>(maxLength: 100, nullable: false),
                    Ward = table.Column<string>(maxLength: 50, nullable: false),
                    Gender = table.Column<string>(maxLength: 10, nullable: false),
                    DateOfBirth = table.Column<DateTime>(nullable: false),
                    ParentName = table.Column<string>(maxLength: 100, nullable: true),
                    ParentEmail = table.Column<string>(maxLength: 100, nullable: true),
                    ParentPhone = table.Column<string>(maxLength: 15, nullable: true),
                    EmergencyName = table.Column<string>(maxLength: 100, nullable: false),
                    EmergencyPhone = table.Column<string>(maxLength: 15, nullable: false),
                    RegisteredDateTime = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Attendees", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Attendees");
        }
    }
}

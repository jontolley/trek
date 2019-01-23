﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using trek.api.Models;

namespace trek.api.Migrations
{
    [DbContext(typeof(TrekContext))]
    [Migration("20190123065133_MakeDOBnullable")]
    partial class MakeDOBnullable
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.4-rtm-31024")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("trek.api.Models.Entities.Attendee", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime?>("DateOfBirth");

                    b.Property<string>("EmergencyName")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<string>("EmergencyPhone")
                        .IsRequired()
                        .HasMaxLength(15);

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<string>("Gender")
                        .IsRequired()
                        .HasMaxLength(10);

                    b.Property<bool>("GlutenAllergy");

                    b.Property<bool>("IsAdult");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<string>("ParentEmail")
                        .HasMaxLength(100);

                    b.Property<string>("ParentName")
                        .HasMaxLength(100);

                    b.Property<string>("ParentPhone")
                        .HasMaxLength(15);

                    b.Property<bool>("PeanutAllergy");

                    b.Property<DateTime>("RegisteredDateTime");

                    b.Property<string>("Ward")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasKey("Id");

                    b.ToTable("Attendees");
                });

            modelBuilder.Entity("trek.api.Models.Entities.Contact", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<string>("Message")
                        .IsRequired()
                        .HasMaxLength(2000);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<DateTime>("ReceivedDateTime");

                    b.Property<string>("Ward")
                        .HasMaxLength(100);

                    b.HasKey("Id");

                    b.ToTable("Contacts");
                });

            modelBuilder.Entity("trek.api.Models.Entities.Faq", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Answer")
                        .IsRequired();

                    b.Property<string>("Key")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("Question")
                        .IsRequired()
                        .HasMaxLength(500);

                    b.Property<int>("SortOrder");

                    b.HasKey("Id");

                    b.HasIndex("Key")
                        .IsUnique();

                    b.ToTable("Faqs");
                });

            modelBuilder.Entity("trek.api.Models.Entities.PackingItem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("IsRequired");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<string>("NeededBy")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<int>("SortOrder");

                    b.HasKey("Id");

                    b.ToTable("PackingItems");
                });
#pragma warning restore 612, 618
        }
    }
}

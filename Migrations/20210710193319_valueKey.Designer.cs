﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using blog;

namespace blog.Migrations
{
    [DbContext(typeof(DbContext))]
    [Migration("20210710193319_valueKey")]
    partial class valueKey
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.1");

            modelBuilder.Entity("blog.Models.Article", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Author")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("Created")
                        .HasColumnType("datetime2");

                    b.Property<string>("ImgUrl")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Text")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Articles");
                });

            modelBuilder.Entity("blog.Models.Tag", b =>
                {
                    b.Property<string>("Value")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int?>("ArticleId")
                        .HasColumnType("int");

                    b.HasKey("Value");

                    b.HasIndex("ArticleId");

                    b.ToTable("Tags");
                });

            modelBuilder.Entity("blog.Models.Tag", b =>
                {
                    b.HasOne("blog.Models.Article", null)
                        .WithMany("Tags")
                        .HasForeignKey("ArticleId");
                });

            modelBuilder.Entity("blog.Models.Article", b =>
                {
                    b.Navigation("Tags");
                });
#pragma warning restore 612, 618
        }
    }
}

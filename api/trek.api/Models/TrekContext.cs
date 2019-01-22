using Microsoft.EntityFrameworkCore;
using trek.api.Models.Entities;

namespace trek.api.Models
{
    public class TrekContext : DbContext
    {
        public TrekContext(DbContextOptions<TrekContext> options)
        : base(options)
        { }

        public DbSet<Contact> Contacts { get; set; }
        public DbSet<Faq> Faqs { get; set; }
        public DbSet<PackingItem> PackingItems { get; set; }
        public DbSet<Attendee> Attendees { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Faq>()
                .HasIndex(b => b.Key)
                .IsUnique();
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using trek.api.Models;
using trek.api.Models.Entities;

namespace trek.api.Services
{
    public class TrekDataRepository : ITrekDataRepository
    {
        private TrekContext _context;

        public TrekDataRepository(TrekContext context)
        {
            _context = context;
        }

        public IEnumerable<Faq> GetFaqs()
        {
            return _context.Faqs;
        }

        public IEnumerable<PackingItem> GetPackingItems()
        {
            return _context.PackingItems;
        }

        public Contact GetContacts(int id)
        {
            return _context.Contacts.FirstOrDefault(c => c.Id == id);
        }

        public IEnumerable<Contact> GetContacts()
        {
            return _context.Contacts;
        }

        public async Task<Contact> AddContacts(Contact contact)
        {
            contact.ReceivedDateTime = DateTime.Now;

            var newContact = await _context.Contacts.AddAsync(contact);
            await _context.SaveChangesAsync();

            return newContact.Entity;
        }
    }
}

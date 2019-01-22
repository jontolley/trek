using System.Collections.Generic;
using System.Threading.Tasks;
using trek.api.Models.Entities;

namespace trek.api.Services
{
    public interface ITrekDataRepository
    {
        IEnumerable<Faq> GetFaqs();

        IEnumerable<PackingItem> GetPackingItems();

        Contact GetContact(int id);

        Task<Contact> AddContacts(Contact contact);

        Attendee GetRegistration(int id);

        Task<Attendee> AddRegistration(Attendee attendee);
    }
}

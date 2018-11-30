using System.Collections.Generic;
using System.Threading.Tasks;
using trek.api.Models.Entities;

namespace trek.api.Services
{
    public interface ITrekDataRepository
    {
        IEnumerable<Faq> GetFaqs();

        IEnumerable<PackingItem> GetPackingItems();

        IEnumerable<Contact> GetContacts();

        Contact GetContacts(int id);

        Task<Contact> AddContacts(Contact contact);
    }
}

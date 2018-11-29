using System.Collections.Generic;
using trek.api.Models.Entities;

namespace trek.api.Services
{
    public interface ITrekDataRepository
    {
        IEnumerable<Faq> GetFaqs();
    }
}

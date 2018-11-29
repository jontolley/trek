using System;
using System.Collections.Generic;
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
    }
}

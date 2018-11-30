using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using trek.api.Models.Entities;
using trek.api.Services;

namespace trek.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactsController : ControllerBase
    {
        private ITrekDataRepository _trekDataRepository;

        public ContactsController(ITrekDataRepository trekDataRepository)
        {
            _trekDataRepository = trekDataRepository;
        }

        [HttpGet]
        public IEnumerable<Contact> GetContacts()
        {
            return _trekDataRepository.GetContacts();
        }

        [HttpGet("{id}")]
        public IActionResult GetContact([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var contact = _trekDataRepository.GetContacts(id);

            if (contact == null)
            {
                return NotFound();
            }

            return Ok(contact);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Contact contact)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _trekDataRepository.AddContacts(contact);

            return CreatedAtAction("GetContact", new { id = contact.Id }, contact);
        }
    }
}

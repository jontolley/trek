using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using trek.api.Models.Entities;
using trek.api.Services;
using trek.api.Services.Email;

namespace trek.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactsController : ControllerBase
    {
        private ITrekDataRepository _trekDataRepository;
        private IEmailService _emailService;

        public ContactsController(ITrekDataRepository trekDataRepository, IEmailService emailService)
        {
            _trekDataRepository = trekDataRepository;
            _emailService = emailService;
        }

        [HttpGet("{id}")]
        public IActionResult GetContact([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var contact = _trekDataRepository.GetContact(id);

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

            var email = await _emailService.GenerateEmailMessageAsync(contact);

            await _emailService.SendMessage(email);

            return CreatedAtAction("GetContact", new { id = contact.Id }, contact);
        }
    }
}

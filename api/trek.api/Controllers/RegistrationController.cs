using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using trek.api.Models.Entities;
using trek.api.Services;

namespace trek.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationController : ControllerBase
    {
        private ITrekDataRepository _trekDataRepository;

        public RegistrationController(ITrekDataRepository trekDataRepository)
        {
            _trekDataRepository = trekDataRepository;
        }

        [HttpGet("{id}")]
        public IActionResult GetRegistration([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var registration = _trekDataRepository.GetRegistration(id);

            if (registration == null)
            {
                return NotFound();
            }

            return Ok(registration);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Attendee attendee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _trekDataRepository.AddRegistration(attendee);

            return CreatedAtAction("GetRegistration", new { id = attendee.Id }, attendee);
        }
    }
}

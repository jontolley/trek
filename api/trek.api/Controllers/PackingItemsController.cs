using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using trek.api.Models.Entities;
using trek.api.Services;

namespace trek.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PackingItemsController : ControllerBase
    {
        private ITrekDataRepository _trekDataRepository;

        public PackingItemsController(ITrekDataRepository trekDataRepository)
        {
            _trekDataRepository = trekDataRepository;
        }

        [HttpGet]
        public ActionResult<IEnumerable<PackingItem>> Get()
        {
            var packingItems = _trekDataRepository.GetPackingItems();
            return Ok(packingItems);
        }
    }
}

﻿using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using trek.api.Models.Entities;
using trek.api.Services;

namespace trek.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FaqsController : ControllerBase
    {
        private ITrekDataRepository _trekDataRepository;

        public FaqsController(ITrekDataRepository trekDataRepository)
        {
            _trekDataRepository = trekDataRepository;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Faq>> Get()
        {
            var faqs = _trekDataRepository.GetFaqs();
            return Ok(faqs);
        }
    }
}

using DevFreela.Application.Queries.GetAllSkills;
//using DevFreela.Application.Services.Interfaces;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace DevFreela.API.Controllers
{
    [Route("api/skills")]
    public class SkillsController : ControllerBase
    {
        //private readonly ISkillService _skillService;

        private readonly IMediator _mediator;

        public SkillsController(IMediator mediator /*ISkillService skillService*/)
        {
            //_skillService = skillService;

            _mediator = mediator;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            //var skills = _skillService.GetAll();

            var getAllSkillsQuery = new GetAllSkillsQuery();

            var skills = await _mediator.Send(getAllSkillsQuery);

            return Ok(skills);
        }
    }
}

using DevFreela.Application.Commands.CreateUser;
using DevFreela.Application.Commands.LoginUser;
//using DevFreela.Application.InputModels;
using DevFreela.Application.Queries.GetUser;
//using DevFreela.Application.Services.Interfaces;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace DevFreela.API.Controllers
{
    [Route("api/users")]
    [Authorize]
    public class UsersController : ControllerBase
    {
        //private readonly IUserService _userService;

        private readonly IMediator _mediator;

        public UsersController(IMediator mediator /*IUserService userService*/)
        {
            //_userService = userService;

            _mediator = mediator;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            //var user = _userService.GetUser(id);

            var getUserQuery = new GetUserQuery(id);

            var user = await _mediator.Send(getUserQuery);

            if (user == null)
                return NotFound();

            return Ok(user);
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Post([FromBody] CreateUserCommand command) 
        {
            //var id = _userService.Create(inputModel);

            var id = await _mediator.Send(command);

            return CreatedAtAction(nameof(GetById), new { id = id }, command);
        }

        [HttpPut("{id}/login")]
        [AllowAnonymous]
        public async Task<IActionResult> Login([FromBody] LoginUserCommand command)
        {
            var loginUserviewModel = await _mediator.Send(command);

            if (loginUserviewModel == null)
                return BadRequest();

            return Ok(loginUserviewModel);
        }
    }
}

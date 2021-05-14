using DevFreela.Application.InputModels;
using DevFreela.Application.ViewModels;

#region
/*
 * Com o uso do padrão CQRS não é necessário o uso dos Services.
 * Porém deixei esse código para fins didáticos.
 */
#endregion

namespace DevFreela.Application.Services.Interfaces
{
    public interface IUserService
    {
        UserViewModel GetUser(int id);
        int Create(CreateUserInputModel inputModel);
    }
}

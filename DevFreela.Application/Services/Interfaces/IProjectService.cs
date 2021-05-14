using DevFreela.Application.InputModels;
using DevFreela.Application.ViewModels;
using System.Collections.Generic;

/*
 * Com o uso do padrão CQRS não é necessário o uso dos Services.
 * Porém deixei esse código para fins didáticos.
 */

namespace DevFreela.Application.Services.Interfaces
{
    // A interface e seus métodos foram substituidos pelas querys do padrão CQRS.
    public interface IProjectService
    {
        List<ProjectViewModel> GetAll(string query);
        ProjectDetailsViewModel GetById(int id);
        int Create(NewProjectInputModel inputModel);
        void Update(UpdateProjectInputModel inputModel);
        void Delete(int id);
        void CreateComment(CreateCommentInputModel inputModel);
        void Start(int id);
        void Finish(int id);
    }
}

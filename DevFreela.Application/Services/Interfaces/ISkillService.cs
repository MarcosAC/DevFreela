using DevFreela.Application.ViewModels;
using System.Collections.Generic;

#region
/*
 * Com o uso do padrão CQRS não é necessário o uso dos Services.
 * Porém deixei esse código para fins didáticos.
 */
#endregion

namespace DevFreela.Application.Services.Interfaces
{
    public interface ISkillService
    {
        List<SkillViewModel> GetAll();
    }
}

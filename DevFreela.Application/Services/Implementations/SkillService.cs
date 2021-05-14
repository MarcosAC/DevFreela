using Dapper;
using DevFreela.Application.Services.Interfaces;
using DevFreela.Application.ViewModels;
using DevFreela.Infrastructure.Persistence;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Linq;

/*
 * Com o uso do padrão CQRS não é necessário o uso dos Services.
 * Porém deixei esse código para fins didáticos.
 */

namespace DevFreela.Application.Services.Implementations
{
    public class SkillService : ISkillService
    {
        private readonly DevFreelaDbContext _dbContext;
        private readonly string _connectionString;

        public SkillService(DevFreelaDbContext dbContext, IConfiguration configuration)
        {
            _dbContext = dbContext;
            _connectionString = configuration.GetConnectionString("DevFreelaCs");
        }


        // O método GetAll foi substituido pela classe GetAllSkillsQueryHandler
        public List<SkillViewModel> GetAll()
        {
            using (var sqlConnection = new SqlConnection(_connectionString))
            {
                sqlConnection.Open();

                var script = "SELECT Id, Description FROM Skills";

                return sqlConnection.Query<SkillViewModel>(script).ToList();

            }

            //var skills = _dbContext.Skills;

            //var skillsViewModel = skills
            //    .Select(skill => new SkillViewModel(skill.Id, skill.Description))
            //    .ToList();

            //return skillsViewModel;
        }
    }
}

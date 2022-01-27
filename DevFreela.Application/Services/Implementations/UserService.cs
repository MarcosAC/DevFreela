﻿using DevFreela.Application.InputModels;
using DevFreela.Application.Services.Interfaces;
using DevFreela.Application.ViewModels;
using DevFreela.Core.Entities;
using DevFreela.Infrastructure.Persistence;
using System.Linq;

namespace DevFreela.Application.Services.Implementations
{
    public class UserService : IUserService
    {
        private readonly DevFreelaDbContext _dbContext;
        public UserService(DevFreelaDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public int Create(CreateUserInputModel inputModel)
        {
            var user = new User(
                inputModel.FullName,
                inputModel.Email,
                inputModel.BirthDate,
                inputModel.Password,
                inputModel.Role);

            _dbContext.Users.Add(user);

            _dbContext.SaveChanges();

            return user.Id;
        }

        // O método GetUser foi substituido pela classe GetAllProjectsQueryHandler
        public UserViewModel GetUser(int id)
        {
            var user = _dbContext.Users.SingleOrDefault(user => user.Id == id);

            if (user == null)
                return null;

            return new UserViewModel(user.FullName, user.Email);
        }
    }
}
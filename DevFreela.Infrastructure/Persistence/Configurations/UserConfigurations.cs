using DevFreela.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DevFreela.Infrastructure.Configurations
{
    public class UserConfigurations : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.HasKey(user => user.Id);

            builder.HasMany(user => user.Skills)
                .WithOne()
                .HasForeignKey(user => user.IdSkill)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}

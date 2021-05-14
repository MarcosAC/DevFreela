using DevFreela.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DevFreela.Infrastructure.Configurations
{
    public class ProjectCommentConfigurations : IEntityTypeConfiguration<ProjectComment>
    {
        public void Configure(EntityTypeBuilder<ProjectComment> builder)
        {
            builder.HasKey(projectComment => projectComment.Id);

            builder.HasOne(projectComment => projectComment.Project)
                .WithMany(project => project.Comments)
                .HasForeignKey(projectComment => projectComment.IdProject);

            builder.HasOne(projectComment => projectComment.User)
                .WithMany(user => user.Comments)
                .HasForeignKey(projectComment => projectComment.IdUser);
        }
    }
}

import { UserSkill } from './UserSkill';
import { Project } from './Project';
import { ProjectComment } from './ProjectComment';

export class User {
  FullName!: string;
  Email!: string;
  BirthDate!: Date;
  CreatedAt!: Date;
  Active!: boolean;
  Password!: string;
  Role!: string;
  Skills!: UserSkill[];
  OwnedProjects!: Project[];
  FreelanceProjects!: Project[];
  Comments!: ProjectComment[];
}

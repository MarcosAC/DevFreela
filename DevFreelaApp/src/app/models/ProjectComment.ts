import { Project } from "./Project";
import { User } from "./User";

export class ProjectComment {
  Content!: string;
  IdProject!: number;
  Project!: Project;
  IdUser!: number;
  User!: User;
  CreatedAt!: Date;
}

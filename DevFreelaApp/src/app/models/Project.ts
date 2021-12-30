import { ProjectStatusEnum } from "../util/ProjectStatusEnum";
import { ProjectComment } from "./ProjectComment";
import { User } from "./User";

export class Project {
  Title!: string;
  Description!: string;
  IdClient!: number;
  Client!: User;
  IdFreelancer!: number;
  Freelancer!: User;
  TotalCost!: number;
  CreatedAt!: Date;
  StartedAt!: Date;
  FinishedAt!: Date;
  Status!: ProjectStatusEnum;
  Comments!: ProjectComment[];
}

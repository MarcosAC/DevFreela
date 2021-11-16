import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProjectFormComponent } from './projectForm/projectForm.component';
import { ProjectsComponent } from './projects/projects.component';
import { UserFormComponent } from './userForm/userForm.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path: '', redirectTo: 'projectForm', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'users', component: UsersComponent}, 
  {path: 'projects', component: ProjectsComponent},
  {path: 'userForm', component: UserFormComponent},
  {path: 'projectForm', component: ProjectFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

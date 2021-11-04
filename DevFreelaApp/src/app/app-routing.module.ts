import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProjectComponent } from './formProject/formProject.component';
import { FormUserComponent } from './formUser/formUser.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProjectsComponent } from './projects/projects.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path: '', redirectTo: 'formProject', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'users', component: UsersComponent},  
  {path: 'formUser', component: FormUserComponent},  
  {path: 'projects', component: ProjectsComponent},
  {path: 'formProject', component: FormProjectComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

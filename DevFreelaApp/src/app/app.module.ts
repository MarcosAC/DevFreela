import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { TitleComponent } from './title/title.component';
import { UserFormComponent } from './userForm/userForm.component';
import { ProjectFormComponent } from './projectForm/projectForm.component';

@NgModule({
  declarations: [									
    AppComponent,
    LoginComponent,
    UsersComponent,
    ProjectsComponent,
    HomeComponent,
    NavComponent,
    TitleComponent,
    UserFormComponent,
    ProjectFormComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

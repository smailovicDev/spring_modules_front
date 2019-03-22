import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaveBarComponent } from './components/nave-bar/nave-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { FootherComponent } from './components/foother/foother.component';
import { ShowUsersComponent } from './components/users/show-users/show-users.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { UpdateUserComponent } from './components/users/update-user/update-user.component';
import { ShowRolesComponent } from './components/roles/show-roles/show-roles.component';
import { AddRoleComponent } from './components/roles/add-role/add-role.component';
import { UpdateRoleComponent } from './components/roles/update-role/update-role.component';
import { ShowTasksComponent } from './components/tasks/show-tasks/show-tasks.component';
import { AddTaskComponent } from './components/tasks/add-task/add-task.component';
import { UpdateTaskComponent } from './components/tasks/update-task/update-task.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule}   from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { MyHttpInterceptor } from './interceptor/my-http-interceptor';
import { RegisterComponent } from './components/register/register.component';


export function tokenGetter() {
  return localStorage.getItem('Authorization');
}

@NgModule({
  declarations: [
    AppComponent,
    NaveBarComponent,
    HeaderComponent,
    FootherComponent,
    ShowUsersComponent,
    AddUserComponent,
    UpdateUserComponent,
    ShowRolesComponent,
    AddRoleComponent,
    UpdateRoleComponent,
    ShowTasksComponent,
    AddTaskComponent,
    UpdateTaskComponent,
    LoginComponent,
    PageNotFoundComponent,
    RegisterComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    DialogModule,
    BrowserAnimationsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        authScheme: '',
        whitelistedDomains: ['localhost:8080'],
        blacklistedRoutes: []
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

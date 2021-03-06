import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ShowTasksComponent } from './components/tasks/show-tasks/show-tasks.component';
import { AddTaskComponent } from './components/tasks/add-task/add-task.component';
import { UpdateTaskComponent } from './components/tasks/update-task/update-task.component';
import { ShowUsersComponent } from './components/users/show-users/show-users.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { UpdateUserComponent } from './components/users/update-user/update-user.component';
import { ShowRolesComponent } from './components/roles/show-roles/show-roles.component';
import { AddRoleComponent } from './components/roles/add-role/add-role.component';
import { UpdateRoleComponent } from './components/roles/update-role/update-role.component';
import { AuthGuardGuard } from './guard/auth-guard.guard';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
{ path:'',redirectTo:'/tasks', pathMatch:'full', canActivate:[ AuthGuardGuard]},
{ path:'login' , component: LoginComponent},
{ path:'register' , component: RegisterComponent},
{ path:'tasks', children:[
  { path:'', component: ShowTasksComponent},
  { path:'add', component: AddTaskComponent},
  { path:'edit/:id', component: UpdateTaskComponent}
] , canActivate:[ AuthGuardGuard]},
{ path:'users', children:[
  { path:'', component: ShowUsersComponent},
  { path:'add', component: AddUserComponent},
  { path:'edit/:id', component: UpdateUserComponent}
] , canActivate:[ AuthGuardGuard]},
{ path:'roles', children:[
  { path:'', component: ShowRolesComponent},
  { path:'add', component: AddRoleComponent},
  { path:'edit/:id', component: UpdateRoleComponent}
] , canActivate:[ AuthGuardGuard]},
{ path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

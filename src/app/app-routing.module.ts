import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { MembersComponent } from './dashboard/components/members/members.component';
import { PodiumComponent } from './dashboard/components/podium/podium.component';
import { LoginComponent } from './login/components/login.component';
import { authetificationGuard } from './guards/authetification.guard';
import { authorizationGuard } from './guards/authorization.guard';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent ,children:[ ],canActivate : [authetificationGuard]},
 { path: 'members', component: MembersComponent ,canActivate : [authetificationGuard,authorizationGuard] ,data : {role:"MANAGER"}},
 { path: 'podium', component: PodiumComponent ,canActivate : [authetificationGuard]},
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: "/login",pathMatch:"full"},
  { path: 'notAuthorized',component:NotAuthorizedComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

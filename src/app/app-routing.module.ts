import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { MembersComponent } from './dashboard/components/members/members.component';
import { PodiumComponent } from './dashboard/components/podium/podium.component';
import { LoginComponent } from './login/components/login.component';
import { authetificationGuard } from './login/guards/authetification.guard';
import { authorizationGuard } from './login/guards/authorization.guard';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { MemberDashboardComponent } from './dashboard/components/dashboard/member-dashboard/member-dashboard.component';
import { authorizationMemberGuard } from './login/guards/authorization-member.guard';
import { JuryDashboardComponent } from './dashboard/components/dashboard/jury-dashboard/jury-dashboard.component';
import { authorizationJuryGuard } from './login/guards/authorization-jury.guard';

const routes: Routes = [

  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [],
    canActivate: [authetificationGuard]
  },
  {
    path: 'members',
    component: MembersComponent,
    canActivate: [authetificationGuard, authorizationGuard], data: { role: "MANAGER" }
  },
  {
    path: 'podium',
    component: PodiumComponent,
    canActivate: [authetificationGuard ,authorizationMemberGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: "/login",
    pathMatch: "full"
  },
  {
    path: 'notAuthorized',
    component: NotAuthorizedComponent
  },
  {
    path: 'membersdashboard',
    component: MemberDashboardComponent,
    canActivate: [authetificationGuard, authorizationMemberGuard], data: { role: "MEMBER" }

  },
  {
    path: 'jurydashboard',
    component: JuryDashboardComponent,
    canActivate: [authetificationGuard, authorizationJuryGuard] }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

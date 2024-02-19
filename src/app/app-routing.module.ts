import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { MembersComponent } from './dashboard/components/members/members.component';
import { PodiumComponent } from './dashboard/components/podium/podium.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},

  { path: 'members', component: MembersComponent},
  { path: 'podium', component: PodiumComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

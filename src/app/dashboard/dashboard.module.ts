import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormComponent } from './components/form/form.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { MembersComponent } from './components/members/members.component';
import { PodiumComponent } from './components/podium/podium.component';
import { MemberDashboardComponent } from './components/dashboard/member-dashboard/member-dashboard.component';
import { JuryDashboardComponent } from './components/dashboard/jury-dashboard/jury-dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SideBarComponent,
    FormComponent,
    PaginationComponent,
    MembersComponent,
    PodiumComponent,
    MemberDashboardComponent,
    JuryDashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class DashboardModule { }

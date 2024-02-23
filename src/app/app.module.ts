import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/components/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppHttpInterceptor } from './login/interceptors/app-http.interceptor';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotAuthorizedComponent,
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    {provide : HTTP_INTERCEPTORS ,useClass :AppHttpInterceptor , multi : true}
  ],
  bootstrap: [
    AppComponent,
    DashboardModule
  ]
})
export class AppModule { }

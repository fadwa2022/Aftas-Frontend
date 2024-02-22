import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/components/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppHttpInterceptor } from './interceptors/app-http.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
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

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  isAuthenticated: boolean = false;
  roles: any;
  username: any;
  accessToken: any;

  constructor(private http: HttpClient, private router: Router) { }

  public login(username: string, password: string) {
    let options = {
      headers: new HttpHeaders().set("Content-type", "application/x-www-form-urlencoded")
    }
    let params = new HttpParams()
      .set("username", username).set("password", password);
    return this.http.post("http://localhost:8080/auth/login", params, options)
  };


  loadProfile(data: any) {
    this.isAuthenticated = true;
    this.accessToken = data['access-token']
    let decodedJwt: any = jwtDecode(this.accessToken);
    this.username = decodedJwt.sub;
    this.roles = decodedJwt.scope;
    window.localStorage.setItem("jwt-token", this.accessToken);
  }

  logout() {
    this.isAuthenticated = false;
    this.accessToken = undefined;
    this.username = undefined;
    this.roles = undefined;
    window.localStorage.removeItem("jwt-token")
    this.router.navigateByUrl("/login")


  }
  loadJwtTokenFromLocalStorage() {
    let token = window.localStorage.getItem("jwt-token")
    if (token) {
      this.loadProfile({ "access-token": token });

      if(this.roles.includes("MEMBER")) this.router.navigateByUrl("/membersdashboard");
      if(this.roles.includes("JURY")) this.router.navigateByUrl("/jurydashboard");
      if(this.roles.includes("MANAGER")) this.router.navigateByUrl("/dashboard");

    }
  }

}

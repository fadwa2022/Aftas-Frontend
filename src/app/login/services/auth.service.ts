import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  isAuthenticated: boolean = false;
  roles: any;
  username: any;
  accessToken: any;

  constructor(private http: HttpClient) { }

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


  }

  logout() {
    this.isAuthenticated = false;
    this.accessToken =undefined;
    this.username = undefined;
    this.roles = undefined;

  }

}

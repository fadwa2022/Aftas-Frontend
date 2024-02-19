import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HuntingModule } from 'src/app/models/hunting/hunting.module';

@Injectable({
  providedIn: 'root'
})
export class HuntingService {

  constructor(private http: HttpClient) { }
  private huntingUrl = 'http://localhost:8080/api/v1/hunting';
  addHunting(data: any): Observable<any> {

    const url = `${this.huntingUrl}`
    console.log(data);

    return this.http.post<HuntingModule>(url, data);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FishModule } from 'src/app/models/fish/fish.module';

@Injectable({
  providedIn: 'root'
})
export class FishService {

  private fishnUrl = 'http://localhost:8080/api/v1/fish';

  constructor(private http: HttpClient) { }

  getFish():Observable<FishModule[]> {
    const url = `${this.fishnUrl}`;

    return this.http.get<FishModule[]>(url);
  }
}

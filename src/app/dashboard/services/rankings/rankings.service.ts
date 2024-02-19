import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RankingModule } from 'src/app/models/ranking/ranking.module';

@Injectable({
  providedIn: 'root'
})
export class RankingsService {


  private membreUrl = 'http://localhost:8080/api/v1/members';
    private rankingUrl = 'http://localhost:8080/api/v1/ranking';
  constructor(private http: HttpClient) { }
  getRanking(competitionCode:String):Observable<RankingModule[]> {
    const url = `${this.membreUrl}/${competitionCode}`;

    return this.http.get<RankingModule[]>(url);
  }
  addRanking(data: any,competitionCode:any): Observable<any> {
    console.log(data)
    const url = `${this.membreUrl}/${competitionCode}`
    return this.http.post<RankingModule>(url, data);
  }

  calculeScore(competitionCode:String):Observable<RankingModule[]> {
    const url = `${this.rankingUrl}/calculeScore/${competitionCode}`;

    return this.http.get<RankingModule[]>(url);
  }
  calculeRank(competitionCode:String):Observable<RankingModule[]>{
    const url = `${this.rankingUrl}/calculeRank/${competitionCode}`;

    return this.http.get<RankingModule[]>(url);
  }
}

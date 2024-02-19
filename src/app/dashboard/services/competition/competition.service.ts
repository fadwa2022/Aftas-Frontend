import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompetitionModule } from 'src/app/models/competition/competition.module';
import { Page } from 'src/app/models/page/page.model';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  private competitionUrl = 'http://localhost:8080/api/v1/compitition';

  constructor(private http: HttpClient) { }

  getCompetitions():Observable<CompetitionModule[]> {
    const url = `${this.competitionUrl}`;

    return this.http.get<CompetitionModule[]>(url);
  }

  getCompetitionsPagination(page: number,size: number): Observable<any> {
    const url = `${this.competitionUrl}/${page}/${size}`;
    return this.http.get<CompetitionModule>(url);
  }

  // getAllCompetitionsPagination(page: number, size: number): Observable<Page<CompetitionModule>> {
  //   let params = new HttpParams()
  //     .set('page', page.toString())
  //     .set('size', size.toString());

  //   return this.http.get<Page<CompetitionModule>>(this.competitionUrl, { params });
  // }

  addCompetition(data: any): Observable<any> {
    const url = `${this.competitionUrl}`;
    return this.http.post<CompetitionModule>(url, data);
  }


}

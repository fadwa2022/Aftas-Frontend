import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MemberModule } from 'src/app/models/member/member.module';
import { RankingModule } from 'src/app/models/ranking/ranking.module';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  private competitionUrl = 'http://localhost:8080/api/v1/members';

  constructor(private http: HttpClient) { }
  getMembers(competitionCode:String):Observable<MemberModule[]> {
    const url = `${this.competitionUrl}/${competitionCode}`;

    return this.http.get<MemberModule[]>(url);
  }

  }

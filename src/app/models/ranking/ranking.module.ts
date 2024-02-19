import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberModule } from '../member/member.module';
import { CompetitionModule } from '../competition/competition.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RankingModule {
  id:Number;
  rank:Number;
  score:Number;
  member:MemberModule;
  competition:CompetitionModule
 }

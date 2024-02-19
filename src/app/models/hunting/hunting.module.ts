import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberModule } from '../member/member.module';
import { CompetitionModule } from '../competition/competition.module';
import { FishModule } from '../fish/fish.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class HuntingModule {
  id:Number;
  numberOfFish:Number;
  member:MemberModule;
  competition:CompetitionModule;
  fish:FishModule;
 }

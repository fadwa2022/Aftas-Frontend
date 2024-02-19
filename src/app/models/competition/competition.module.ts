import { NgModule } from '@angular/core';
import { CommonModule, Time } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CompetitionModule {
  code:String;
  date:Date;
  startTime:Time;
  endTime:Time;
  numberOfParticipants:Number;
  location:String;
  amount:Number;
 }

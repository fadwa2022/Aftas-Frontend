import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelModule } from '../level/level.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class FishModule {
  id:Number;
  name:String;
  averageWeight:Number;
  level:LevelModule;
 }

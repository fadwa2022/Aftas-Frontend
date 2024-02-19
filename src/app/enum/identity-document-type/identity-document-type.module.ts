import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class IdentityDocumentTypeModule {
  static CIN = 'CIN';
  static CARTE_RESIDENCE = 'CARTE_RESIDENCE';
  static PASSWORD = 'PASSWORD';
}

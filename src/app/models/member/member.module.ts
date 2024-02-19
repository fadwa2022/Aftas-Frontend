import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdentityDocumentTypeModule } from 'src/app/enum/identity-document-type/identity-document-type.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MemberModule {
  num:Number;
  name:String;
  familyName:String;
  accessionDate:Date;
  nationality:String;
  identityDocument:IdentityDocumentTypeModule;
  identityNumber:String;
  
}

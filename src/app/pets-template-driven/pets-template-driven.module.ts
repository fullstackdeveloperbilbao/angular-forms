import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PetsTemplateDrivenComponent } from './pets-template-driven.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [PetsTemplateDrivenComponent],
  imports: [
    FormsModule,
    SharedModule
  ]
})
export class PetsTemplateDrivenModule { }

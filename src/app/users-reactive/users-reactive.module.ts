import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersReactiveComponent } from './users-reactive.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [UsersReactiveComponent],
  imports: [
    ReactiveFormsModule,
    SharedModule
  ]
})
export class UsersReactiveModule { }

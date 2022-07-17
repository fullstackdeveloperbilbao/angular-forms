import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsTemplateDrivenComponent } from './pets-template-driven/pets-template-driven.component';
import { UsersReactiveComponent } from './users-reactive/users-reactive.component';

const routes: Routes = [
  { path: 'users', component: UsersReactiveComponent },
  { path: 'pets', component: PetsTemplateDrivenComponent },
  { path: '**', component: UsersReactiveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

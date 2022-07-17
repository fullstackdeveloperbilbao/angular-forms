import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PetsTemplateDrivenModule } from './pets-template-driven/pets-template-driven.module';
import { UsersReactiveModule } from './users-reactive/users-reactive.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PetsTemplateDrivenModule,
    UsersReactiveModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

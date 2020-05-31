import {RouterModule, Routes} from '@angular/router';
import {ROUTES} from './app.routes'

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HighlightDirective } from './highlight.directive';
import { DisplayDirective } from './display.directive';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user/user-profile.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent, 
    HighlightDirective, 
    DisplayDirective, 
    SignUpComponent, 
    UserProfileComponent, 
    MenuComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinkedinAuthenticatorComponent } from './linkedin-authenticator/linkedin-authenticator.component';
import { HttpClientModule } from '@angular/common/http';
import { GoogleAuthenticatorComponent } from './google-authenticator/google-authenticator.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkedinAuthenticatorComponent,
    GoogleAuthenticatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

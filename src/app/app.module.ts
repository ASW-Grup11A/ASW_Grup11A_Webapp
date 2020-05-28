import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {ProfileComponent} from './profile/profile.component';
import {
  SocialLoginModule,
  AuthServiceConfig
} from 'angularx-social-login';
import { getAuthServiceConfigs } from './socialloginConfig';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ListContributionsComponent } from './list-contributions/list-contributions.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { ContributionsMainComponent } from './contributions-main/contributions-main.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    TopBarComponent,
    ListContributionsComponent,
    BottomBarComponent,
    ContributionsMainComponent
  ],
  imports: [
    SocialLoginModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { HeaderBannerComponent } from './Components/header-banner/header-banner.component';
import { ExpComponent } from './Components/exp/exp.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderBannerComponent,
    ExpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

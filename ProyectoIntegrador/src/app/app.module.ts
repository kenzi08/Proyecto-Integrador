import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { HeaderBannerComponent } from './Components/header-banner/header-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    HeaderBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

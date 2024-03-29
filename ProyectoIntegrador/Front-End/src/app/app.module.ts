import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { HeaderBannerComponent } from './Components/header-banner/header-banner.component';
import { ExpComponent } from './Components/exp/exp.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HSSkillsComponent } from './Components/hs-skills/hs-skills.component';
import { ProyectosComponent } from './Components/proyectos/proyectos.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderBannerComponent,
    ExpComponent,
    HSSkillsComponent,
    ProyectosComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

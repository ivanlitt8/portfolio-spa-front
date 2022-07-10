import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingComponent } from './components/landing/landing.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjetsComponent } from './components/projets/projets.component';
import { ServicesComponent } from './components/services/services.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { IdiomComponent } from './components/idiom/idiom.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    SkillsComponent,
    ProjetsComponent,
    ServicesComponent,
    EducationComponent,
    ExperienceComponent,
    CopyrightComponent,
    IdiomComponent
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

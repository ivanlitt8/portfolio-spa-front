import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { EditExperienceComponent } from './components/edit-experience/edit-experience.component';
import { EditEducationComponent } from './components/edit-education/edit-education.component';
import { EditIdiomComponent } from './components/edit-idiom/edit-idiom.component';
import { EditLandingComponent } from './components/edit-landing/edit-landing.component';
import { EditProjetComponent } from './components/edit-projet/edit-projet.component';
import { EditServiceComponent } from './components/edit-service/edit-service.component';
import { HttpClientModule } from '@angular/common/http';
import { interceptorProvider } from './services/interceptor-service';


const appRoutes: Routes = [
  // {path:'login', component: LoginComponent},
]

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
    IdiomComponent,
    LoginComponent,
    PortfolioComponent,
    EditExperienceComponent,
    EditEducationComponent,
    EditIdiomComponent,
    EditLandingComponent,
    EditProjetComponent,
    EditServiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

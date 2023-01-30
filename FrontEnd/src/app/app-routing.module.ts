import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoginComponent } from './components/login/login.component';
import { EditExperienceComponent } from './components/edit-experience/edit-experience.component';
import { EditEducationComponent } from './components/edit-education/edit-education.component';
import { EditIdiomComponent } from './components/edit-idiom/edit-idiom.component';
import { EditLandingComponent } from './components/edit-landing/edit-landing.component';
import { EditProjetComponent } from './components/edit-projet/edit-projet.component';
import { EditServiceComponent } from './components/edit-service/edit-service.component';

const routes: Routes = [
  {path:'', component: PortfolioComponent},
  {path:'iniciar-sesion', component: LoginComponent},
  {path:'edit-experience', component: EditExperienceComponent},
  {path:'edit-education', component: EditEducationComponent},
  {path:'edit-language', component: EditIdiomComponent},
  {path:'edit-landing', component: EditLandingComponent},
  {path:'edit-projet', component: EditProjetComponent},
  {path:'edit-service', component: EditServiceComponent},
  {path:'', redirectTo:'portfolio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

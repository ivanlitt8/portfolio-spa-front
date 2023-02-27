import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienceComponent } from './components/experience/new-experience.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';

const routes: Routes = [
  { path: '', component: PortfolioComponent },
  { path: 'iniciar-sesion', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperienceComponent },
  { path: 'editexp/:id', component: EditExperienceComponent },
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

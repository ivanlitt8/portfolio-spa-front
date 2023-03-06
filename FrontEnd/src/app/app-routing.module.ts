import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienceComponent } from './components/experience/new-experience.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { NewEducationComponent } from './components/education/new-education.component';
import { EditEducationComponent } from './components/education/edit-education.component';
import { NewServiceComponent } from './components/services/new-service.component';
import { EditServiceComponent } from './components/services/edit-service.component';

const routes: Routes = [
  { path: '', component: PortfolioComponent },
  { path: 'iniciar-sesion', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperienceComponent },
  { path: 'editexp/:id', component: EditExperienceComponent },
  { path: 'nuevaedu', component: NewEducationComponent },
  { path: 'editedu/:id', component: EditEducationComponent },
  { path: 'nuevoserv', component: NewServiceComponent },
  { path: 'editserv/:id', component: EditServiceComponent },
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

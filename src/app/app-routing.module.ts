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
import { NewProjectComponent } from './components/projets/new-project.component';
import { EditProjectComponent } from './components/projets/edit-project.component';
import { NewIdiomaComponent } from './components/idiom/new-idioma.component';
import { EditIdiomaComponent } from './components/idiom/edit-idioma.component';
import { NewSkillComponent } from './components/skills/new-skill.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { EditLandingComponent } from './components/landing/edit-landing.component';

const routes: Routes = [
  { path: '', component: PortfolioComponent },
  { path: 'iniciar-sesion', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperienceComponent },
  { path: 'editexp/:id', component: EditExperienceComponent },
  { path: 'nuevaedu', component: NewEducationComponent },
  { path: 'editedu/:id', component: EditEducationComponent },
  { path: 'nuevoserv', component: NewServiceComponent },
  { path: 'editserv/:id', component: EditServiceComponent },
  { path: 'nuevoproyecto', component: NewProjectComponent },
  { path: 'editproyecto/:id', component: EditProjectComponent },
  { path: 'nuevoidioma', component: NewIdiomaComponent },
  { path: 'editidioma/:id', component: EditIdiomaComponent },
  { path: 'nuevaskill', component: NewSkillComponent },
  { path: 'editskill/:id', component: EditSkillComponent },
  { path: 'editpersona/:id', component: EditLandingComponent },
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

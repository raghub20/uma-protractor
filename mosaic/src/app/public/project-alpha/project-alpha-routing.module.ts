import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizedMoveComponent } from './authorized-move/authorized-move.component';
import { CostModelComponent } from './cost-model/cost-model.component';
import { CandidateProfileComponent } from './candidate-profile/candidate-profile.component';
import { ProjectAlphaComponent } from './project-alpha.component';
import { LoginComponent} from './login/login.component';

const routes: Routes =
[
  {
    path: '',
    redirectTo: 'project-alpha',
    pathMatch: 'full'
  },
  {
    path: 'project-alpha',
    component: ProjectAlphaComponent,
    children: [
      {
        path: '',
        redirectTo: 'candidate-profiles',
        pathMatch: 'full'
      },
      {
        path: 'cost-models',
        component: CostModelComponent
      },
      {
        path: 'candidate-profiles',
        component: CandidateProfileComponent
      },
      {
        path: 'approved-moves',
        component: AuthorizedMoveComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectAlphaRoutingModule {

}

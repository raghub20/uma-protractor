import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizedMoveComponent } from './authorized-move/authorized-move.component';
import { CostModelComponent } from './cost-model/cost-model.component';
import { CandidateProfileComponent } from './candidate-profile/candidate-profile.component';
import { ProjectAlphaComponent } from './project-alpha.component';
import { LoginComponent} from './login/login.component';
import { ServicesComponent } from './services/services.component';
import { ExploreDestinationsComponent } from './explore-destinations/explore-destinations.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes =
[
  {
    path: 'dashboard',
    redirectTo: 'project-alpha',
    pathMatch: 'full'
  },
  {
    path: 'project-alpha',
    component: ProjectAlphaComponent,
    children: [
      {
        path:'dashboard',
        component:DashboardComponent
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
      },
      {
        path: 'explore-destinations',
        component: ExploreDestinationsComponent
      },
      {
        path: 'services',
        component: ServicesComponent
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

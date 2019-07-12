import { NgModule, InjectionToken } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { ExternRouteComponent } from './public/components/extern-route/extern-route.component';

const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');
const routes: Routes = [
  {
    path: '',
    redirectTo: 'project-alpha',
    pathMatch: 'full'
  },
  {
    path: 'project-alpha',
    loadChildren: './public/project-alpha/project-alpha.module#ProjectAlphaModule'
  },
  {
    path: 'externalRedirect',
    resolve: {
      url: externalUrlProvider
    },
    component: ExternRouteComponent
  }
];

@NgModule({
  providers: [
    {
      provide: externalUrlProvider,
      useValue: (route: ActivatedRouteSnapshot) => {
        const externalURL = route.paramMap.get('externalUrl');
        window.location.replace(externalURL);
      }
    }
  ],
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

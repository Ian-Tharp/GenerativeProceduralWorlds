import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { WorldOrchestratorComponent } from './world-orchestrator/world-orchestrator.component';

export const routes: Routes = [
  {
    path: 'landing-page',
    component: LandingPageComponent
  },
  {
    path: '',
    redirectTo: 'landing-page',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'landing-page',
    pathMatch: 'full'
  },
  {
    path: 'world-orchestrator',
    component: WorldOrchestratorComponent
  }
];
@NgModule({
    imports: [RouterModule.forRoot(routes /*, {enableTracing: true}*/)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}

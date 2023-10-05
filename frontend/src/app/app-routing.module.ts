import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Page/home/home.component';
import { ServiceComponent } from './Page/service/service.component';
import { AutoTaskComponent } from './Page/auto-task/auto-task.component';
import { InfrastructureComponent } from './Page/infrastructure/infrastructure.component';
import { PentestComponent } from './Page/pentest/pentest.component';
import { WebDevelopmentComponent } from './Page/web-development/web-development.component';

const routes: Routes = [
  { path: 'web-development', component:  WebDevelopmentComponent },
  { path: 'pentest', component:  PentestComponent },
  { path: 'infrastructure', component:  InfrastructureComponent },
  { path: 'auto-task', component:  AutoTaskComponent },
  { path: 'service', component:  ServiceComponent },
  { path: '', component:  HomeComponent }
  // { path: '', redirectTo: '/service', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

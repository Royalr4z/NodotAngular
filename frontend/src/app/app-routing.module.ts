import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Page/home/home.component';
import { ServiceComponent } from './Page/service/service.component';
import { AutoTaskComponent } from './Page/auto-task/auto-task.component';
import { InfrastructureComponent } from './Page/infrastructure/infrastructure.component';

const routes: Routes = [
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Page/home/home.component';
import { ServiceComponent } from './Page/service/service.component';
import { AutoTaskComponent } from './Page/auto-task/auto-task.component';
import { InfrastructureComponent } from './Page/infrastructure/infrastructure.component';
import { PentestComponent } from './Page/pentest/pentest.component';
import { WebDevelopmentComponent } from './Page/web-development/web-development.component';
import { PageContactComponent } from './Page/page-contact/page-contact.component';
import { PageErrorComponent } from './Page/page-error/page-error.component';
import { PageBlogComponent } from './Page/page-blog/page-blog.component';
import { DetailComponent } from './Page/detail/detail.component';
import { SigninComponent } from './Page/signin/signin.component';
import { SignupComponent } from './Page/signup/signup.component';

import { BlogCreationComponent } from './Page/Admin/blog-creation/blog-creation.component';

const admin = localStorage.getItem('admin');

const routes: Routes = [
  { path: 'blog-creation', component: admin ? BlogCreationComponent : PageErrorComponent},

  { path: 'signup', component:  SignupComponent },
  { path: 'signin', component:  SigninComponent },
  { path: 'detail', component:  DetailComponent },
  { path: 'blog', component:  PageBlogComponent },
  { path: 'contact', component:  PageContactComponent },
  { path: 'web-development', component:  WebDevelopmentComponent },
  { path: 'pentest', component:  PentestComponent },
  { path: 'infrastructure', component:  InfrastructureComponent },
  { path: 'auto-task', component:  AutoTaskComponent },
  { path: 'service', component:  ServiceComponent },
  { path: 'Error', component:  PageErrorComponent },
  { path: '', component:  HomeComponent },
  { path: '**', redirectTo: 'Error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

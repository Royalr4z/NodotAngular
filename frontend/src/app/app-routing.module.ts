import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Pages/home/home.component';
import { ServiceComponent } from './Pages/service/service.component';
import { AutoTaskComponent } from './Pages/auto-task/auto-task.component';
import { InfrastructureComponent } from './Pages/infrastructure/infrastructure.component';
import { PentestComponent } from './Pages/pentest/pentest.component';
import { WebDevelopmentComponent } from './Pages/web-development/web-development.component';
import { PageContactComponent } from './Pages/page-contact/page-contact.component';
import { PageErrorComponent } from './Pages/page-error/page-error.component';
import { PageBlogComponent } from './Pages/page-blog/page-blog.component';
import { DetailComponent } from './Pages/detail/detail.component';
import { SigninComponent } from './Pages/signin/signin.component';
import { SignupComponent } from './Pages/signup/signup.component';

import { BlogCreationComponent } from './Pages/Admin/blog-creation/blog-creation.component';
import { CategoryCreationComponent } from './Pages/Admin/category-creation/category-creation.component';
import { PageUsersTableComponent } from './Pages/Admin/page-users-table/page-users-table.component';

const admin = localStorage.getItem('admin');

const routes: Routes = [
  { path: 'blog-creation', component: admin ? BlogCreationComponent : PageErrorComponent},
  { path: 'category-creation', component: admin ? CategoryCreationComponent : PageErrorComponent},
  { path: 'users-table', component: admin ? PageUsersTableComponent : PageErrorComponent},

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

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ServiceComponent } from './Page/service/service.component';
import { HomeComponent } from './Page/home/home.component';
import { IndexheaderComponent } from './Template/indexheader/indexheader.component'
import { FooterComponent } from './Template/footer/footer.component';
import { AboutComponent } from './Template/about/about.component';
import { FeaturesComponent } from './Template/features/features.component';
import { ServiceTptComponent } from './Template/service-tpt/service-tpt.component';
import { QuoteComponent } from './Template/quote/quote.component';
import { IndexblogComponent } from './Template/indexblog/indexblog.component';
import { ErrorComponent } from './Template/error/error.component';
import { HeaderComponent } from './Template/header/header.component';
import { AutoTaskComponent } from './Page/auto-task/auto-task.component';
import { InfrastructureComponent } from './Page/infrastructure/infrastructure.component';
import { PentestComponent } from './Page/pentest/pentest.component';
import { WebDevelopmentComponent } from './Page/web-development/web-development.component';
import { PageErrorComponent } from './Page/page-error/page-error.component';
import { ContactUsComponent } from './Template/contact-us/contact-us.component';
import { PageContactComponent } from './Page/page-contact/page-contact.component';
import { PageBlogComponent } from './Page/page-blog/page-blog.component';
import { BlogComponent } from './Template/blog/blog.component';
import { DetailComponent } from './Page/detail/detail.component';
import { BlogContentComponent } from './Template/blog-content/blog-content.component';
import { SigninComponent } from './Page/signin/signin.component';
import { LoginComponent } from './Template/login/login.component';
import { SignupComponent } from './Page/signup/signup.component';
import { RegisterComponent } from './Template/register/register.component';
import { BlogCreationComponent } from './Page/Admin/blog-creation/blog-creation.component';
import { BlogInsertComponent } from './Template/Admin/blog-insert/blog-insert.component';
import { CategoryCreationComponent } from './Page/Admin/category-creation/category-creation.component';
import { CategoryInsertComponent } from './Template/Admin/category-insert/category-insert.component';
import { PageUsersTableComponent } from './Page/Admin/page-users-table/page-users-table.component';
import { UsersTableComponent } from './Template/Admin/users-table/users-table.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    IndexheaderComponent,
    ServiceComponent,
    HomeComponent,
    AboutComponent,
    FeaturesComponent,
    ServiceTptComponent,
    QuoteComponent,
    IndexblogComponent,
    ErrorComponent,
    HeaderComponent,
    AutoTaskComponent,
    InfrastructureComponent,
    PentestComponent,
    WebDevelopmentComponent,
    PageErrorComponent,
    ContactUsComponent,
    PageContactComponent,
    PageBlogComponent,
    BlogComponent,
    DetailComponent,
    BlogContentComponent,
    SigninComponent,
    LoginComponent,
    SignupComponent,
    RegisterComponent,
    BlogCreationComponent,
    BlogInsertComponent,
    CategoryCreationComponent,
    CategoryInsertComponent,
    PageUsersTableComponent,
    UsersTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

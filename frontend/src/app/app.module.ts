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

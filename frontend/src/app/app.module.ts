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

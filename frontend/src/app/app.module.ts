import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceComponent } from './Page/service/service.component';
import { HomeComponent } from './Page/home/home.component';
import { IndexheaderComponent } from './Template/indexheader/indexheader.component'
import { FooterComponent } from './Template/footer/footer.component';
import { AboutComponent } from './Template/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    IndexheaderComponent,
    ServiceComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexheaderComponent } from './Template/indexheader/indexheader.component'
import { FooterComponent } from './Template/footer/footer.component';
import { ServiceComponent } from './Page/service/service.component';
import { HomeComponent } from './Page/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    IndexheaderComponent,
    ServiceComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

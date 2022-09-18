import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoUserDiscoverComponent } from './components/discover/info-user-discover/info-user-discover.component';
import { PostImgComponent } from './components/discover/post-img/post-img.component';
import { SectionHeadingComponent } from './components/discover/section-heading/section-heading.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarUploadbuttonComponent } from './components/navbar-uploadbutton/navbar-uploadbutton.component';
import { DiscoverPageComponent } from './components/discover/discover-page/discover-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    InfoUserDiscoverComponent,
    PostImgComponent,
    SectionHeadingComponent,
    NavbarComponent,
    NavbarUploadbuttonComponent,
    DiscoverPageComponent
  ],
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
      ),
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoUserDiscoverComponent } from './info-user-discover/info-user-discover.component';
import { PostImgComponent } from './post-img/post-img.component';
import { SectionHeadingComponent } from './section-heading/section-heading.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../in-memory-data.service';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarUploadbuttonComponent } from './navbar-uploadbutton/navbar-uploadbutton.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchPageGrillaComponent } from './search-page-grilla/search-page-grilla.component';
import { ToptitleComponent } from './toptitle/toptitle.component';
import { SearchPageSbarComponent } from './search-page-sbar/search-page-sbar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InfoUserDiscoverComponent,
    PostImgComponent,
    SectionHeadingComponent,
    NavbarComponent,
    NavbarUploadbuttonComponent,
    SearchPageComponent,
    SearchPageGrillaComponent,
    ToptitleComponent,
    SearchPageSbarComponent
  ],
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
      ),
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

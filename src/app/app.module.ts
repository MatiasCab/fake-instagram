import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InfoUserDiscoverComponent } from './components/discover/info-user-discover/info-user-discover.component';
import { PostImgComponent } from './components/discover/post-img/post-img.component';
import { SectionHeadingComponent } from './components/discover/section-heading/section-heading.component';
import { NavbarUploadbuttonComponent } from './components/navbar/navbar-uploadbutton/navbar-uploadbutton.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { SearchPageGrillaComponent } from './components/search-page/search-page-grilla/search-page-grilla.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchPageSbarComponent } from './components/search-page/search-page-sbar/search-page-sbar.component';
import { DiscoverPageComponent } from './components/discover/discover-page/discover-page.component';
import { PostCarouselComponent } from './components/post-carousel/post-carousel.component';
import { FullSizedImageComponent } from './components/full-sized-image/full-sized-image.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UserIconComponent } from './components/user-icon/user-icon.component';
import { ProfileHeaderComponent } from './components/profile/profile-header/profile-header.component';
import { ProfilePageComponent } from './components/profile/profile-page/profile-page.component';
import { ProfilePhotoGridComponent } from './components/profile/profile-photo-grid/profile-photo-grid.component';
import { UploadPageComponent } from './components/upload-page/upload-page.component';
import { UploadButtonComponent } from './components/upload-page/upload-button/upload-button.component';
import { InMemoryDataService } from './services/in-memory-data.service';
import { DiscoverImgsService } from './services/discover-imgs.service';
import { UploadDescriptionBarComponent } from './components/upload-page/upload-description-bar/upload-description-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    InfoUserDiscoverComponent,
    PostImgComponent,
    SectionHeadingComponent,
    NavbarComponent,
    NavbarUploadbuttonComponent,
    DiscoverPageComponent,
    PostCarouselComponent,
    FullSizedImageComponent,
    UserIconComponent,
    ProfileHeaderComponent,
    ProfilePageComponent,
    ProfilePhotoGridComponent,
    UploadPageComponent,
    UploadButtonComponent,
    SearchPageComponent,
    SearchPageGrillaComponent,
    SearchPageSbarComponent,
    UploadDescriptionBarComponent,
  ],
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
      ),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

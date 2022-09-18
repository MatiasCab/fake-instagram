import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoUserDiscoverComponent } from './info-user-discover/info-user-discover.component';
import { PostImgComponent } from './post-img/post-img.component';
import { SectionHeadingComponent } from './section-heading/section-heading.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoUserDiscoverComponent,
    PostImgComponent,
    SectionHeadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

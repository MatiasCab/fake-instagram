import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    NavbarComponent,
    NavbarUploadbuttonComponent,
    SearchPageComponent,
    SearchPageGrillaComponent,
    ToptitleComponent,
    SearchPageSbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

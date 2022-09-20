import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverPageComponent } from './components/discover/discover-page/discover-page.component';
import { UploadPageComponent } from './components/upload-page/upload-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'uploadPhoto', component: UploadPageComponent},
  { path: 'home', component: DiscoverPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

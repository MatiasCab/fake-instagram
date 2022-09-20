import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UnploadPageComponent } from './components/unpload-page/unpload-page.component';
import { DiscoverPageComponent } from './components/discover/discover-page/discover-page.component';
import { ProfilePageComponent } from './components/profile/profile-page/profile-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'unploadPhoto', component: UnploadPageComponent},
  { path: 'home', component: DiscoverPageComponent},
  { path: 'profile', component: ProfilePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

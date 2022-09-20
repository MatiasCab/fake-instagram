import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnploadPageComponent } from './components/unpload-page/unpload-page.component';
import { DiscoverPageComponent } from './components/discover/discover-page/discover-page.component';

const routes: Routes = [{ path: 'unploadPhoto', component: UnploadPageComponent},
                        { path: 'home', component: DiscoverPageComponent},
                        { path: '', redirectTo: '/home', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

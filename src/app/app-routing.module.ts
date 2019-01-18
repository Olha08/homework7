import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomepageComponent } from './homepage/homepage.component';
import { ChartsComponent } from './charts/charts.component';
import { ListAndTableComponent } from './list-and-table/list-and-table.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'home', component: HomepageComponent},
  { path: 'charts', component: HomepageComponent},
  { path: 'tables', component: ListAndTableComponent },
  { path: 'gallery', component: GalleryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

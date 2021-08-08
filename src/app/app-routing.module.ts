import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './component/countries/countries.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent}, 
  {path: 'countries', component: CountriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

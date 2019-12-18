import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationsComponent} from "./locations/locations.component";


const routes: Routes = [
  { path:'', redirectTo: '/locations',pathMatch: 'full'},
  { path: 'locations', component: LocationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

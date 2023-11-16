import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./modules/main/dashboard/dashboard.component";
import {NgPrimeDashboardComponent} from "./modules/main/dashboard/ng-prime-dashboard/ng-prime-dashboard.component";

const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full'},
  {path: 'ngprime', component: NgPrimeDashboardComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

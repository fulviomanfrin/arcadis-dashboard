import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgPrimeDashboardComponent} from './dashboard/ng-prime-dashboard/ng-prime-dashboard.component';
import {MenubarModule} from "primeng/menubar";
import {MenuModule} from "primeng/menu";
import {FormsModule} from "@angular/forms";
import { TopBarComponent } from './top-bar/top-bar.component';
import { BodyComponent } from './dashboard/body/body.component';
import {CardModule} from "primeng/card";
import { FleetOverviewComponent } from './dashboard/body/components/fleet-overview/fleet-overview.component';


@NgModule({
  declarations: [

    TopBarComponent,
     BodyComponent,
     FleetOverviewComponent
  ],
  exports: [
    TopBarComponent,
    BodyComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    MenuModule,
    FormsModule,
    CardModule
  ]
})
export class MainModule { }

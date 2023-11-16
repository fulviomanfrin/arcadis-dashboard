import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgPrimeDashboardComponent} from './dashboard/ng-prime-dashboard/ng-prime-dashboard.component';
import {MenubarModule} from "primeng/menubar";
import {MenuModule} from "primeng/menu";
import {FormsModule} from "@angular/forms";
import { TopBarComponent } from './top-bar/top-bar.component';


@NgModule({
  declarations: [

    TopBarComponent
  ],
  exports: [
    TopBarComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    MenuModule,
    FormsModule
  ]
})
export class MainModule { }

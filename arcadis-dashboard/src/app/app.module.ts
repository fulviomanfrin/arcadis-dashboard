import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DashboardComponent} from "./modules/main/dashboard/dashboard.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatTableModule} from "@angular/material/table";
import {GridColsDirective} from "./shared/directives/grid-cols-directive";
import {NgPrimeDashboardComponent} from "./modules/main/dashboard/ng-prime-dashboard/ng-prime-dashboard.component";
import {MenuModule} from "primeng/menu";
import {MenubarModule} from "primeng/menubar";
import {MainModule} from "./modules/main/main.module";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NgPrimeDashboardComponent,
    GridColsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatTableModule,
    MenuModule,
    MenubarModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

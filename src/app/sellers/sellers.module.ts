import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellersRoutingModule } from './sellers-routing.module';
import { SellersComponent } from './sellers.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    SellersComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SellersRoutingModule
  ]
})
export class SellersModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellersComponent } from './sellers.component';
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', component: SellersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellersRoutingModule { }

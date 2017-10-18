import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'dashboard'},
  {path:'dashboard',component:DashboardComponent},
  {path:'customers',component:CustomersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

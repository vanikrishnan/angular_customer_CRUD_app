import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { HomeComponent } from './components/home/home.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { ViewCustomerComponent } from './components/view-customer/view-customer.component';

const routes: Routes = [
  {
    path: "create",
    component: CreateCustomerComponent
  },
  {
    path: "update",
    component: UpdateCustomerComponent
  },
  {
    path: "view",
    component: ViewCustomerComponent
  },
  {
    path: "",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

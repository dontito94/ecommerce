import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {EcommarceHomeComponent} from './ecommarce-home/ecommarce-home.component';
import {HomeComponent} from "./home/home.component";
import {SingleComponent} from "./single/single.component";
import {ProductComponent} from "./product/product.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {AccountComponent} from "./account/account.component";

const routes: Routes = [
  {
    path: 'ecommerce', component: EcommarceHomeComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'single', component: SingleComponent},
      {path: 'product', component: ProductComponent},
      {path: 'contact-us', component: ContactUsComponent},
      {path: 'checkout', component: CheckoutComponent},
      {path: 'account', component: AccountComponent}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisplayEcommarceRoutingModule { }

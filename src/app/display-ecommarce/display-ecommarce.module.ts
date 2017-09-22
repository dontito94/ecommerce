import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplayEcommarceRoutingModule } from './display-ecommarce-routing.module';
import { EcommarceHomeComponent } from './ecommarce-home/ecommarce-home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AccountComponent } from './account/account.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductComponent } from './product/product.component';
import { SingleComponent } from './single/single.component';
import { HomeComponent } from './home/home.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DisplayEcommarceRoutingModule
  ],
  declarations: [
    EcommarceHomeComponent,
    ContactUsComponent,
    AccountComponent,
    CheckoutComponent,
    ProductComponent,
    SingleComponent,
    HomeComponent]
})
export class DisplayEcommarceModule { }

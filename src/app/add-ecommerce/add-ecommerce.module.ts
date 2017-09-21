import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEcommerceRoutingModule } from './add-ecommerce-routing.module';
import { AddHomeComponent } from './add-home/add-home.component';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  imports: [
    CommonModule,
    AddEcommerceRoutingModule
  ],
  declarations: [AddHomeComponent, AddProductComponent]
})
export class AddEcommerceModule { }

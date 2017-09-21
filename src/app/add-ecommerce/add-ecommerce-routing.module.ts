import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddHomeComponent} from "./add-home/add-home.component";
import {AddProductComponent} from "./add-product/add-product.component";

const routes: Routes = [
  {path: '', component:AddHomeComponent,
  children: [
    {path: '', pathMatch:'full', redirectTo: 'add-product'},
    {path: 'add-product', component: AddProductComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddEcommerceRoutingModule { }

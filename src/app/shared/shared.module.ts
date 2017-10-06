import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  declarations: [LoginComponent, HeaderComponent, RegisterComponent , FooterComponent],
  exports: [LoginComponent, HeaderComponent, FooterComponent, RegisterComponent]
})
export class SharedModule { }

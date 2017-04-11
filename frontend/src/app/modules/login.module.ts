import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from '../routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { RegisterComponent } from '../components/public/register/register.component';
import { LoginComponent } from '../components/public/login/login.component';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
      FormsModule,
      RoutingModule,
      BrowserModule
  ]
})

export class LoginModule { }

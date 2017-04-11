import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from '../routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { DashboardMsgboxComponent } from '../components/dashboard/messageboxes/messageboxes.component';
import { DashboardUsersComponent } from '../components/dashboard/users/users.component';
import { NewMessageboxComponent } from '../components/dashboard/messageboxes/new/new.component';
import { NewUserComponent } from '../components/dashboard/users/new/new.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardMsgboxComponent,
    DashboardUsersComponent,
    NewMessageboxComponent,
    NewUserComponent
  ],
  imports: [
      FormsModule,
      RoutingModule,
      BrowserModule
  ]
})

export class DashboardModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from '../routing.module';

import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { DashboardMsgboxComponent } from '../components/dashboard/messageboxes/messageboxes.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardMsgboxComponent
  ],
  imports: [
      FormsModule,
      RoutingModule
  ]
})

export class DashboardModule { }

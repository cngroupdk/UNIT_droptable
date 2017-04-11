import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from '../routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { MessageboxesComponent } from '../components/public/messageboxes/messageboxes.component';

@NgModule({
  declarations: [
    MessageboxesComponent
  ],
  imports: [
      FormsModule,
      RoutingModule,
      BrowserModule
  ]
})

export class MessageboxesModule { }

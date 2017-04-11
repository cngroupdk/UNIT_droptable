import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from '../routing.module';

import { MessageboxesComponent } from '../components/public/messageboxes/messageboxes.component';

@NgModule({
  declarations: [
    MessageboxesComponent
  ],
  imports: [
      FormsModule,
      RoutingModule
  ]
})

export class MessageboxesModule { }

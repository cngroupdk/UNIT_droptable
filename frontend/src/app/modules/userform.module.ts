import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from '../routing.module';

import { UserformComponent } from '../components/public/userform/userform.component';

@NgModule({
  declarations: [
    UserformComponent
  ],
  imports: [
      FormsModule,
      RoutingModule
  ]
})

export class UserformModule { }

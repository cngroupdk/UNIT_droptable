import { Component } from '@angular/core';

import { HeaderComponent } from './partials/header/header.component';
import { MyfooterComponent } from './partials/footer/myfooter.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'TellMe Box';
}

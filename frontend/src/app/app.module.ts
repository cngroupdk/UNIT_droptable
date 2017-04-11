import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RoutingModule } from './routing.module';

import { LoginModule } from './modules/login.module';
import { MessageboxesModule } from './modules/messagebox.module';
import { DashboardModule } from './modules/dashboard.module';

import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components//partials/header/header.component';
import { MyfooterComponent } from './components//partials/footer/myfooter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MyfooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    LoginModule,
    MessageboxesModule,
    DashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

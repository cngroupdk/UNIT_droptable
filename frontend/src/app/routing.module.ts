import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './components/public/register/register.component'; 
import { LoginComponent } from './components/public/login/login.component'; 
import { MessageboxComponent } from './components/public/messagebox/messagebox.component';

import { MessageboxesComponent } from './components/public/messageboxes/messageboxes.component';
import { UserformComponent } from './components/public/userform/userform.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardMsgboxComponent } from './components/dashboard/messageboxes/messageboxes.component';
import { DashboardUsersComponent } from './components/dashboard/users/users.component';
import { NewMessageboxComponent } from './components/dashboard/messageboxes/new/new.component';
import { NewUserComponent } from './components/dashboard/users/new/new.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegisterComponent},
  { path: 'account/:id', component: MessageboxesComponent},
  { path: 'account/:id/messagebox/:id', component: MessageboxComponent },
  { path: 'dashboard', component: DashboardComponent ,
        children: [
            { path: '', component: DashboardMsgboxComponent },
            { path: 'messageboxes', component: DashboardMsgboxComponent },
            { path: 'users', component: DashboardUsersComponent },
            { path: 'newMessagebox', component: NewMessageboxComponent },
            { path: 'newUser', component: NewUserComponent }
        ]
  }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class RoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './components/public/register/register.component'; 
import { LoginComponent } from './components/public/login/login.component'; 

import { MessageboxesComponent } from './components/public/messageboxes/messageboxes.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardMsgboxComponent } from './components/dashboard/messageboxes/messageboxes.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegisterComponent},
  { path: 'account/:id', component: MessageboxesComponent},
  { path: 'dashboard', component: DashboardComponent ,
        children: [
            { path: '', component: DashboardMsgboxComponent }
        ]
  }
]

/*const routes: RouterConfig = [
    { path: '', redirectTo: 'home', terminal: true },
    {
        path: 'home', component: HomeComponent, canActivate: [AuthGuard],
        children: [
            {
                path: 'profile', component: ProfileComponent,
                children: [
                    {
                        path: '', component: AvatarComponent
                    },
                    {
                        path: 'avatar', component: AvatarComponent
                    },
                    {
                        path: 'password', component: PasswordComponent
                    }
                ]
            },
            {
                path: '',
                component: RoomReservationsComponent
            },
            {
                path: 'reservations/cars',
                component: CarsReservationsComponent,
                children: [
                    {
                        path: '', component: ReservationsComponent
                    },
                    {
                        path: 'newreservation', component: OrderDetailComponent
                    },
                    {
                        path: 'editreservation/:id', component: OrderDetailComponent
                    },
                    {
                        path: 'myreservations', component: MyReservationsComponent,
                    },
                    {
                        path: 'orders', component: OrdersManagerComponent, canActivate: [OperatorGuard]
                    }
                ]
            },
            {
                path: 'reservations/rooms',
                component: RoomReservationsComponent
            }

        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'passwordReset', component: PasswordResetComponent },
    { path: 'passwordReset/:token', component: PasswordSetComponent },
    {
        path: 'admin', component: AdminComponent, canActivate: [AuthGuard, AdminGuard],
        children: [
            {
                path: '',
                component: UsersAdminComponent
            },
            {
                path: 'offices',
                component: OfficesAdminComponent
            },
            {
                path: 'cars',
                component: CarsAdminComponent
            },
            {
                path: 'users',
                component: UsersAdminComponent
            },
            {
                path: 'equipment',
                component: EquipmentAdminComponent
            },
            {
                path: 'roles',
                component: RolesAdminComponent
            }

        ]
    }
];*/

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class RoutingModule { }
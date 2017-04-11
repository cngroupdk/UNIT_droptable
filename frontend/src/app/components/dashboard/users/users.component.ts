import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../../../models/user.model'
import { Account } from '../../../models/account.model'

import { AccountService } from '../../../services/account.service';
import { UserService } from '../../../services/user.service';

@Component({
    selector: 'dashboard-users',
    templateUrl: './users.component.html',
    providers: [AccountService, UserService]
})

export class DashboardUsersComponent implements OnInit
{
    account:Account;
    users:User[]

    constructor(private accountService: AccountService, private userService: UserService)
    {}

    ngOnInit()
    {
        this.userService.getAll().subscribe(
            data => {
                this.users = data.json()
            },
            error => {
                console.log(error);
            }
        );

        this.accountService.me().subscribe(
            data => {
                this.account = data.json();
            },
            error => {
                console.log(error);
            }
        )
    }
}
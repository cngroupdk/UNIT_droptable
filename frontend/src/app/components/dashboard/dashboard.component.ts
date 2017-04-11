import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Messagebox } from '../../models/messagebox.model'
import { Account } from '../../models/account.model'

import { AccountService } from '../../services/account.service';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    providers: [AccountService],
})

export class DashboardComponent implements OnInit
{
    account:Account;

    constructor(private accountService: AccountService, private router: Router, private route: ActivatedRoute)
    {}

    ngOnInit()
    {
        this.accountService.me().subscribe(
            data => {
                this.account = data.json();
            },
            error => {
                console.log(error);
            }
        )
    }

    logout()
    {
        localStorage.removeItem('user_token');
        this.router.navigate(['login']);
    }
}
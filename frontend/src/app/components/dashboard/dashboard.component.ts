import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

    constructor(private accountService: AccountService)
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
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Messagebox } from '../../../models/messagebox.model'
import { Account } from '../../../models/account.model'

import { AccountService } from '../../../services/account.service';

@Component({
    selector: 'dashboard-msgboxes',
    templateUrl: './messageboxes.component.html',
    providers: [AccountService],
})

export class DashboardMsgboxComponent implements OnInit
{
    messageboxes:Messagebox[];

    constructor(private accountService: AccountService)
    {}

    ngOnInit()
    {
        this.accountService.messageboxes().subscribe(
            data => {
                this.messageboxes = data.json();
            },
            error => {
                console.log(error);
            }
        )
    }
}
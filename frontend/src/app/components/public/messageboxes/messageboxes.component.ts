import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Messagebox } from '../../../models/messagebox.model'
import { Account } from '../../../models/account.model'

import { AccountService } from '../../../services/account.service';

@Component({
    selector: 'messageboxes',
    templateUrl: './messageboxes.component.html',
    providers: [AccountService],
})

export class MessageboxesComponent implements OnInit
{
    account:Account;
    messageboxes:Messagebox[];

    constructor(private accountService: AccountService, private route:ActivatedRoute)
    {}

    ngOnInit()
    {
        this.accountService.get(this.route.snapshot.params['id']).subscribe(
            data => {
                this.account = data.json();
            },
            error => {
                console.log(error);
            }
        )

        this.accountService.messageboxes(this.route.snapshot.params['id']).subscribe(
            data => {
                this.messageboxes = data.json();
            },
            error => {
                console.log(error);
            }
        )
    }
}
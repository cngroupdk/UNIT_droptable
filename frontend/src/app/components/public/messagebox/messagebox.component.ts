import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Messagebox } from '../../../models/messagebox.model'
import { Account } from '../../../models/account.model'
import { Response } from '../../../models/response.model';

import { AccountService } from '../../../services/account.service';

@Component({
    selector: 'messageboxes',
    templateUrl: './messagebox.component.html',
    providers: [AccountService]
})

export class MessageboxComponent implements OnInit
{
    account:Account = new Account(1, 'FIT');
    messageboxes:Messagebox = { id: "1" , type: 1, name: "poc1", open: true, password: '' };
    responses:Response[];

    constructor(private accountService: AccountService, private route:ActivatedRoute)
    {}

    ngOnInit()
    {
       /* this.accountService.get(this.route.snapshot.params['id']).subscribe(
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
        )*/
    }
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Messagebox } from '../../../models/messagebox.model'
import { Account } from '../../../models/account.model'

import { AccountService } from '../../../services/account.service';

@Component({
    selector: 'messageboxes',
    templateUrl: './messageboxes.component.html',
    providers: [AccountService],
      styleUrls: ['./messageboxes.component.css']
})

export class MessageboxesComponent implements OnInit
{
    account:Account = new Account(1, 'FIT');
    messageboxes:Messagebox[]  = [
        { id: "1" , type: 1, name: "Subject PA1", open: true, password: '' },
        { id: "2" , type: 1, name: "Subject PA2", open: true, password: '' },
        { id: "3" , type: 1, name: "BI-DBS", open: true, password: '' },
        { id: "4" , type: 1, name: "BI-ZMA", open: true, password: '' },
  ];

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
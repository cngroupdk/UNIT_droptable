import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Messagebox } from '../../../models/messagebox.model'
import { Account } from '../../../models/account.model'

import { AccountService } from '../../../services/account.service';

@Component({
    selector: 'dashboard-msgboxes',
    templateUrl: './messageboxes.component.html',
    styleUrls: ['./messageboxes.component.css'],
    providers: [AccountService],
})

export class DashboardMsgboxComponent implements OnInit
{
    account:Account = new Account(1, 'FIT');
    messageboxes:Messagebox[]  = [
        { id: "1" , type: 1, name: "poc1", open: true, password: '' },
         { id: "2" , type: 1, name: "poc1", open: true, password: '' },
          { id: "3" , type: 1, name: "poc1", open: true, password: '' },
           { id: "4" , type: 1, name: "poc1", open: true, password: '' },
            { id: "1" , type: 1, name: "poc1", open: true, password: '' },
             { id: "1" , type: 1, name: "poc1", open: true, password: '' },
              { id: "1" , type: 1, name: "poc1", open: true, password: '' },
  ];

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
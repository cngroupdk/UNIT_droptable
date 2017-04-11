import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Messagebox } from '../../../models/messagebox.model'
import { Account } from '../../../models/account.model'
import { AccountService } from '../../../services/account.service';

@Component({
    selector: 'userform',
    templateUrl: './userform.component.html',
    providers: [AccountService],
      styleUrls: ['./userform.component.css']
})

export class UserformComponent
{
    account:Account;
    messageboxes:Messagebox[];
   
}
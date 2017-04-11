import { Component } from '@angular/core';

import { Account } from '../../../models/account.model'
import { User } from '../../../models/user.model'

import { UserService } from '../../../services/user.service';
import { AccountService } from '../../../services/account.service';

@Component({
    selector: 'registrer',
    templateUrl: './register.component.html',
    providers: [UserService, AccountService]
})

export class RegisterComponent
{
    account = new Account(0, '');
    user = new User(0, '', 0, '');
    user_password_repeat = '';
    success:string = '';

    constructor(private userService: UserService, private accountService: AccountService)
    {}

    submitRegistration()
    {
        var account_id;
        this.accountService.create(this.account).subscribe(
            data => {
                account_id = data.json().id
            },
            () => {
                this.userService.create(this.user, account_id).subscribe(
                    () => {
                        this.success = 'Account and user successfully created.';
                    }
                );
            }
        );
    }
}
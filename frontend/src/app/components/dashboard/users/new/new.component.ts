import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../../../models/user.model'

import { UserService } from '../../../../services/user.service';

@Component({
    selector: 'new-messagebox',
    templateUrl: './new.component.html',
    providers: [UserService],
})

export class NewUserComponent
{
    user = new User(0, '', 1, '');
    success:string = '';

    constructor(private userService: UserService)
    {}

    createUser()
    {
        this.userService.adminCreate(this.user).subscribe(
            error => {
                console.log(error);
            },
            data => {
                this.success = "User created successfully.";
            }
        )
    }
}
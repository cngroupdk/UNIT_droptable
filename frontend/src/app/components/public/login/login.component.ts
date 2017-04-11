import { Component } from '@angular/core';

import { User } from '../../../models/user.model'
import { UserService } from '../../../services/user.service'

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    providers: [UserService],
})

export class LoginComponent
{
    constructor(private userService: UserService)
    {}

    user = new User(0, '', 0, '');
    error:string = '';

    submitLogin()
    {
        this.userService.authenticate(this.user.email, this.user.password)    
    }
}
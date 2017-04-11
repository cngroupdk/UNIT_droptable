import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../../models/user.model'
import { UserService } from '../../../services/user.service'

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    providers: [UserService],
})

export class LoginComponent
{
    constructor(private userService: UserService, private router: Router)
    {}

    user = new User(0, '', 0, '');
    error:string = '';

    submitLogin()
    {
        this.userService.authenticate(this.user.email, this.user.password).subscribe(
            data => {
                localStorage.setItem('user_token', data.json().token)
                this.router.navigate(['dashboard']);
            },
            error => {
                error = "Incorrect email or password!";
            }
        )
    }
}
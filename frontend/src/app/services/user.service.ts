import { Injectable } from '@angular/core';
import { Http, JsonpModule, RequestOptions, Headers } from '@angular/http';

import { User } from '../models/user.model';

@Injectable()
export class UserService
{
    path = 'http://localhost:3000';
    options;
    headers;

    constructor(private http: Http)
    {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });
    }

    public getAll()
    {
        this.headers.append('Authorization', 'Bearer ' + localStorage.getItem('user_token'));
        return this.http.get(this.path + '/user', this.options);
    }

    public authenticate(email:string, password:string)
    {
        return this.http.post(this.path + '/login', JSON.stringify({
            email: email,
            password: password
        }), this.options);
    }

    public create(user:User, account_id:number)
    {
        return this.http.post(this.path + '/user', JSON.stringify({
            email: user.email,
            password: user.password,
            account_id: account_id
        }), this.options);
    }

    public adminCreate(user:User)
    {
        this.headers.append('Authentication', 'Bearer ' + localStorage.getItem('user_token'));
        return this.http.post(this.path + '/user', JSON.stringify({
            email: user.email,
            password: user.password
        }), this.options);
    }
}
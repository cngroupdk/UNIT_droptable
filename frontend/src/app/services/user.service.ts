import { Injectable } from '@angular/core';
import { Http, JsonpModule, RequestOptions, Headers } from '@angular/http';

import { User } from '../models/user.model';

@Injectable()
export class UserService
{
    path = 'http://localhost:4200/api';

    constructor(private http: Http)
    {}

    public authenticate(email:string, password:string)
    {
        
    }

    public create(user:User)
    {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.path + '/user', JSON.stringify({
            email: user.email,
            password: user.password
        }), options);
    }
}
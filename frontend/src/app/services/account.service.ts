import { Injectable } from '@angular/core';
import { Http, JsonpModule, RequestOptions, Headers } from '@angular/http';

import { Account } from '../models/account.model';

@Injectable()
export class AccountService
{
    path = 'http://localhost:3000';
    options;

    constructor(private http: Http)
    {}

    public me()
    {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('user_token'));
        this.options = new RequestOptions({ headers: headers });
        return this.http.get(this.path + '/account/', this.options);
    }

    public get(id:number)
    {
        return this.http.get(this.path + '/account/' + id);
    }

    public messageboxes(id:number = null)
    {
        if(id != null)
            return this.http.get(this.path + '/msgboxes?id=' + id);
        else 
        {
            let headers = new Headers({ 'Content-Type': 'application/json' });
            headers.append('Authorization', 'Bearer ' + localStorage.getItem('user_token'));
            this.options = new RequestOptions({ headers: headers });
            return this.http.get(this.path + '/msgboxes', this.options);
        }
    }

    public create(account:Account)
    {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.path + '/account', JSON.stringify({
            name: account.name
        }), options);
    }
}
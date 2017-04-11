import { Injectable } from '@angular/core';
import { Http, JsonpModule, RequestOptions, Headers } from '@angular/http';

import { Account } from '../models/account.model';

@Injectable()
export class AccountService
{
    path = 'http://localhost:4200/api';

    constructor(private http: Http)
    {}

    public me()
    {
        return this.http.get(this.path + '/account/');
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
            return this.http.get(this.path + '/msgboxes');
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
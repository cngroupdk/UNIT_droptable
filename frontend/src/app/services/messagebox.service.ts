import { Injectable } from '@angular/core';
import { Http, JsonpModule, RequestOptions, Headers } from '@angular/http';

import { Messagebox } from '../models/messagebox.model';

@Injectable()
export class MessageboxService
{
    path = 'http://localhost:4200/api';
    options;

    constructor(private http: Http)
    {}

    public get(id:string)
    {
        return this.http.get(this.path + '/msgboxes?id=' + id);
    }

    public create(msgbox:Messagebox)
    {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('user_token'));
        return this.http.post(this.path + '/msgboxes', JSON.stringify({
            type: msgbox.type,
            name: msgbox.name,
            open: msgbox.open,
            password: msgbox.password
        }), options);
    }
}
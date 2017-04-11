import { Injectable } from '@angular/core';
import { Http, JsonpModule, RequestOptions, Headers } from '@angular/http';

import { Response } from '../models/response.model';

@Injectable()
export class ResponseService
{
    path = 'http://localhost:4200/api';
    options;

    constructor(private http: Http)
    {}

    public get(id:string)
    {
        return this.http.get(this.path + '/messagebox/' + id + '/reponse');
    }


    public create(response:Response, id:string)
    {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.path + '/messagebox/' + id + '/response', JSON.stringify({
            id: response.id,
            type: response.type,
            publisher: response.publisher,
            published: response.published,
            email: response.email,
            value: response.value,
            msbgox: response.msbgox.id
        }), options);
    }
}
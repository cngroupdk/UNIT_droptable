import * as Promise from "bluebird";
import knex from "../lib/database";

import {QueryBuilder} from "knex";

interface ResponseData {
    publishable: boolean,
    published: boolean,
    email: string,
    timestamp: Date,
    value: string,
    accountID: number,
    mailboxID: number
}

export default class Response {
    constructor(public id: number, public data: ResponseData) {}

    insert(): Promise<number> {
        return knex("responses").insert(this.toMySQLObject())
             .then(([id]) => id);
    }

    update(): QueryBuilder {
        return knex("responses").where({id: this.id}).update(this.toMySQLObject());
    }

    delete(): QueryBuilder {
        return knex("responses").where({id: this.id}).delete();
    }

    private toMySQLObject() {
        return {
            id: this.id,
            publishable: this.data.publishable,
            published: this.data.published,
            email: this.data.email,
            timestamp: this.data.timestamp,
            value: this.data.value,
            account_id: this.data.accountID,
            mailbox_id: this.data.mailboxID
        };
    }

    static getAll(accountID: number): Promise<Response[]> {
        return knex("responses").where({account_id: accountID}).select().map(Response.fromMySQLObject)
    }

    static getByID(id: string): Promise<Response> {
        return knex("msgboxes").where({id: id}).select()
            .then((result) => result.length != 0 ? Response.fromMySQLObject(result[0]) : null);
    }
    
    private static fromMySQLObject(obj: any): Response {
        const data: ResponseData = {
            publishable: obj.publishable,
            published: obj.published,
            email: obj.email,
            timestamp: obj.timestamp,
            value: obj.value,
            accountID: obj.account_id,
            mailboxID: obj.mailbox_id
        }
        return new Response(obj.id, data);
    }


}
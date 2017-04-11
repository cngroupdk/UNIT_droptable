import * as Promise from "bluebird";
import knex from "../lib/database";

class Account {
    constructor(public id: Number, public name: string) {}

    insert(): Promise<Number> {
        return knex("accounts").insert(this).then(([id]) => id);
    }

    static getAll(): Promise<Account[]> {
        return knex("accounts").select().map(Account.fromMySQLObject)
    }

    static getByID(id: Number): Promise<Account> {
        return knex("accounts").where({id: id}).select()
            .then((result) => result.length != 0 ? Account.fromMySQLObject(result[0]) : null);
    }

    private static fromMySQLObject(obj: any): Account {
        return new Account(obj.id, obj.name);
    }
}

export default Account;
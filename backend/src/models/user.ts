import * as Promise from "bluebird";
import knex from "../lib/database";
import {hashSync} from "bcryptjs";
import {QueryBuilder} from "knex";

export enum Role {
    Admin = 1,
    Reader
}

export class User {
    constructor(public id: Number, public password: string, public email: string, public role: Role, public accountID: Number) {}

    setPasswordFromCleartext(pwd: string) {
        this.password = hashSync(pwd, 10);
    }

    insert(): Promise<Number> {
        return knex("users").insert(this.toMySQLObject())
             .then(([id]) => id);
    }

    update(): QueryBuilder {
        return knex("users").where({id: this.id}).update(this.toMySQLObject());
    }

    delete(): QueryBuilder {
        return knex("users").where({id: this.id}).delete();
    }

    private toMySQLObject() {
        return {id: this.id, password: this.password,
             email: this.email, role: this.role, account_id: this.accountID}
    }

    static getAll(accountID: Number): Promise<User[]> {
        return knex("users").where({account_id: accountID}).select().map(User.fromMySQLObject)
    }

    static getByID(id: Number): Promise<User> {
        return knex("users").where({id: id}).select()
            .then((result) => result.length != 0 ? User.fromMySQLObject(result[0]) : null);
    }

    private static fromMySQLObject(obj: any): User {
        return new User(obj.id, obj.password, obj.email, obj.role, obj.account_id);
    }

}
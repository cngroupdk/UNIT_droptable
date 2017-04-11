import * as Promise from "bluebird";
import knex from "../lib/database";
import { QueryBuilder } from "knex";
import PasswordProtected from "./password";

export enum Role {
    Admin = 1,
    Reader
}

export default class User extends PasswordProtected {
    constructor(public id: Number, hashedPwd: string, public email: string, public role: Role, public accountID: Number) {
        super(hashedPwd);
    }

    insert(): Promise<User> {
        return knex("users").insert(this.toMySQLObject())
            .then(([id]) => { this.id = id; return this; });
    }

    update(): QueryBuilder {
        return knex("users").where({ id: this.id }).update(this.toMySQLObject());
    }

    delete(): QueryBuilder {
        return knex("users").where({ id: this.id }).delete();
    }

    private toMySQLObject() {
        return {
            id: this.id, password: this.pwd,
            email: this.email, role: this.role, account_id: this.accountID
        }
    }

    static getAll(accountID: Number): Promise<User[]> {
        return knex("users").where({ account_id: accountID }).select().map(User.fromMySQLObject)
    }

    static getByID(id: Number): Promise<User> {
        return knex("users").where({ id: id }).select()
            .then((result) => result.length != 0 ? User.fromMySQLObject(result[0]) : null);
    }

    static getByEmail(email: string): Promise<User> {
        return knex("users").where({ email: email }).select()
            .then((result) => result.length != 0 ? User.fromMySQLObject(result[0]) : null);
    }

    private static fromMySQLObject(obj: any): User {
        return new User(obj.id, obj.password, obj.email, obj.role, obj.account_id);
    }

}

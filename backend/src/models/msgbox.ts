import * as Promise from "bluebird";
import knex from "../lib/database";
import Hashids = require("hashids");
import config = require("config");

import {QueryBuilder} from "knex";

export enum Type {
    Numeric = 1,
    Text = 2
}

export class Msgbox {
    private static hashids = new Hashids(config.get("msgbox_sid_salt") as string);

    private id_: number;
    private sid_: string;

    constructor(sid: string, public type: Type, public is_private: Boolean, public name: String, public accountID: number, public creator: number) {
        if (sid != null) {
            this.id_ = Msgbox.hashids.decode(sid)[0];
            this.sid_ = sid;
        }
    }

    set id(newID: number) {
        this.id_ = newID;
        this.sid_ = Msgbox.hashids.encode(newID);
    }

    get id() {
        return this.id_;
    }

    set sid(newSID: string) {
        this.sid_ = newSID;
        this.id_ = Msgbox.hashids.decode(newSID)[0];
    }

    get sid() {
        return this.sid_;
    }

    insert(): Promise<number> {
        return knex("msgboxes").insert(this.toMySQLObject())
             .then(([id]) => id);
    }

    update(): QueryBuilder {
        return knex("msgboxes").where({id: this.id}).update(this.toMySQLObject());
    }

    delete(): QueryBuilder {
        return knex("msgboxes").where({id: this.id}).delete();
    }

    private toMySQLObject() {
        return {id: this.id, type: this.type, private: this.is_private, name: this.name, account_id: this.accountID, created_by: this.creator};
    }

    static getAll(accountID: number): Promise<Msgbox[]> {
        return knex("msgboxes").where({account_id: accountID}).select().map(Msgbox.fromMySQLObject)
    }

    static getBySID(sid: string): Promise<Msgbox> {
        return knex("msgboxes").where({id: Msgbox.hashids.decode(sid)}).select()
            .then((result) => result.length != 0 ? Msgbox.fromMySQLObject(result[0]) : null);
    }
    
    private static fromMySQLObject(obj: any): Msgbox {
        const box = new Msgbox("", obj.type, obj.private, obj.name, obj.account_id, obj.created_by);
        box.id = obj.id;
        return box;
    }


}
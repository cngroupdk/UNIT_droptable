import { Request, Response, NextFunction } from 'express';
import Account from "../../../models/account";


function createAccount(req: Request, res: Response, next: NextFunction) {
    const account = new Account(null, req.body.name);
    account.insert().then((account) => {
        res.status(201);
        res.send({
            status: "Success",
            data: account
        });
    }).catch(next);
}

function getAccountByID(req: Request, res: Response, next: NextFunction) {
    Account.getByID(parseInt(req.params.id)).then((account) => {
        res.status(200);
        res.send({
            status: "Success",
            data: account
        });
    });
}

export default {
    createAccount,
    getAccountByID
};

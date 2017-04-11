import { Request, Response, NextFunction } from 'express';
import User from "../../../models/user";
import {Role} from "../../../models/user";

function getAllUsers(req: Request, res: Response, next: NextFunction) {
    User.getAll(req.user.accountID).map(filterUser).then((users) => {
        res.status(200);
        res.send({
            status: "Success",
            data: users
        })
    }).catch(next);
}

function createUser(req: Request, res: Response, next: NextFunction) {
    const user = new User(null, null, req.body.email, req.body.role as Role, parseInt(req.body.account_id));
    user.plaintextPwd = req.body.password;
    user.insert().then((user) => {
        res.status(201);
        
        res.send({
            status: "Success",
            data: filterUser(user)
        });
    }).catch(() => {
        res.status(410);
        res.send({status: "Error", data: "User with the given email already exists"});
    });
}

function updateUserById(req: Request, res: Response, next: NextFunction) {
    // Not implemented yet.
    next();
}

function removeUserById(req: Request, res: Response, next: NextFunction) {
    new User(parseInt(req.params.id), null, null, null, null).delete().then(() => {
        res.status(200);
        res.send({status: "Success"});
    }).catch(next);
}

function getMe(req: Request, res: Response, next: NextFunction) {
    res.status(200);
    res.send(filterUser(req.user));
}

function filterUser(user: User): any {
    const userToSend = {};
    Object.assign(userToSend, user);
    userToSend["pwd"] = undefined;
    return userToSend;
}

export default {
    getAllUsers,
    createUser,
    updateUserById,
    removeUserById,
    getMe
};

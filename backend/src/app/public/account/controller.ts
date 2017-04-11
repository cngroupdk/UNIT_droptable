import { Request, Response, NextFunction } from 'express';

function createAccount(req: Request, res: Response, next: NextFunction) {
    next();
}

function getAccountName(req: Request, res: Response, next: NextFunction) {
    next();
}

export default {
    createAccount,
    getAccountName
};

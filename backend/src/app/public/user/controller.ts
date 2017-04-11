import { Request, Response, NextFunction } from 'express';

function getAlUsers(req: Request, res: Response, next: NextFunction) {
    next();
}

function createUser(req: Request, res: Response, next: NextFunction) {
    next();
}

function updateUserById(req: Request, res: Response, next: NextFunction) {
    next();
}

function removeUserById(req: Request, res: Response, next: NextFunction) {
    next();
}

function getMe(req: Request, res: Response, next: NextFunction) {
    next();
}

export default {
    getAlUsers,
    createUser,
    updateUserById,
    removeUserById,
    getMe
};

import { Request, Response, NextFunction } from 'express';
import UnauthorizedError from '../errors/UnauthorizedError';

export default function(req: Request, res: Response, next: NextFunction) {
    if (!req.user) {
        next(new UnauthorizedError());
    } else {
        next();
    }
};

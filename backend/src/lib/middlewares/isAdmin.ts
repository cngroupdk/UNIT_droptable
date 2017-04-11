import { Request, Response, NextFunction } from 'express';
import UnauthorizedError from '../errors/UnauthorizedError';

export default function(req: Request, res: Response, next: NextFunction) {
    if (req.user.admin) {
        next(new UnauthorizedError());
    } else {
        next();
    }
};

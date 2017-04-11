import { Request, Response, NextFunction } from 'express';
import { User } from '../../models/user';

export default function(req: Request, res: Response, next: NextFunction) {
    console.log(req);
    next();
};

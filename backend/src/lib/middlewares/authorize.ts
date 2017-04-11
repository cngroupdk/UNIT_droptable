import { Request, Response, NextFunction } from 'express';
import UnauthorizedError from '../../lib/errors/UnauthorizedError';
import * as jwtSimple from 'jwt-simple';
import * as config from 'config';

import User from '../../models/user';

function isBearer(headers) {
    if (headers.authorization != null || headers.authorization != undefined) {
        return headers.authorization.split(' ')[0] === 'Bearer';
    }
}

function extractToken(headers) {
    return headers.authorization.split(' ')[1];
}

export default function(req: Request, res: Response, next: NextFunction) {
    if (isBearer(req.headers)) {
        const object = jwtSimple.decode(extractToken(req.headers), config.get('token.token_secret'));
        User.getByID(object.id)
        .then(user => req.user = user)
        .then(() => next())
        .catch(next);
    } else {
        next();
    }
};

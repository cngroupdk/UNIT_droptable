import { Request, Response, NextFunction } from 'express';
import User from '../../models/user'
import BadRequestError from '../../lib/errors/BadRequestError'
import * as config from 'config';
import * as jwtSimple from 'jwt-simple';

function loginUser(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    let user = null;
    User.getByEmail(email)
    .tap(_user => user = _user)
    .then(_user => {
        if (user) {
            return user.compare(password);
        }
    })
    .then(valid => {
        if (valid) {
            const object = {id: user.id};
            const token = jwtSimple.encode(object, config.get('token.token_secret'));
            res.status(200);
            res.send({
                status: 'Success',
                data: { token }
            });
        } else {
            next(new BadRequestError('Bad username or password.'));
        }
    })
    .catch(next);
}

function logoutUser(req: Request, res: Response) {
    res.status(204);
    res.end();
}

export default {
    loginUser,
    logoutUser
};

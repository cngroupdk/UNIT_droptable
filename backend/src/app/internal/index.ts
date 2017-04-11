import { Application, Request, Response, NextFunction } from 'express';
import controller from './controller';
import BadRequestError from '../../lib/errors/BadRequestError';
import isLoggedIn from '../../lib/middlewares/isLoggedIn';

export default function(app: Application) {
    app.route('/login')
    .post(checkUserCredentials, controller.loginUser);

    app.route('/logout')
    .post(isLoggedIn, controller.logoutUser);
}

function checkUserCredentials(req: Request, res: Response, next: NextFunction) {
    req.checkBody('email', '`email` required').notEmpty();
    req.checkBody('password', '`password` required').notEmpty();

    const errors = req.validationErrors();
    if (errors) {
        next(new BadRequestError(JSON.stringify(errors)));
    } else {
        next();
    }
}

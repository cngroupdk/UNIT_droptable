import { Application, Request, Response, NextFunction } from 'express';
import BadRequestError from "../../../lib/errors/BadRequestError";
import ForbiddenError from "../../../lib/errors/ForbiddenError";
import isAdmin    from '../../../lib/middlewares/isAdmin';
import isLoggedIn from '../../../lib/middlewares/isLoggedIn';
import controller from './controller';

export default function(app: Application) {
    app.route('/account')
    .post(checkAccountCreationData, controller.createAccount);

    app.route('/account/:id')
    .get(isLoggedIn, checkAccountId,controller.getAccountByID);
}

function checkAccountCreationData(req: Request, res: Response, next: NextFunction) {
    req.checkBody("name", "`name` required").notEmpty();

    const errors = req.validationErrors();
    if (errors) {
        next(new BadRequestError(JSON.stringify(errors)));
    } else {
        next();
    }
}

function checkAccountId(req: Request, res: Response, next: NextFunction) {
    req.checkParams("id", "`id` must be present and an integer").notEmpty().isInt();
    const errors = req.validationErrors();
    if (errors) {
        return next(new BadRequestError(JSON.stringify(errors)));
    }

    console.log(req.user, req.params);
    if (req.user.accountID != parseInt(req.params.id)) {
        next(new ForbiddenError("users can only access their own accounts"));
    } else {
        next();
    }
}

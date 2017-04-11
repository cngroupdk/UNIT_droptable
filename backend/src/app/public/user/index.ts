import { Application, Request, Response, NextFunction } from 'express';
import isAdmin    from '../../../lib/middlewares/isAdmin';
import isLoggedIn from '../../../lib/middlewares/isLoggedIn';
import controller from './controller';
import BadRequestError from "../../../lib/errors/BadRequestError";
import ForbiddenError from "../../../lib/errors/ForbiddenError";
import User from "../../../models/user";

export default function(app: Application) {
    app.route('/user')
    .get(isLoggedIn, controller.getAllUsers)
    .post(isRegistrationForm, controller.createUser);

    app.route('/user/:id')
    .put(isLoggedIn, testUserAccount, controller.updateUserById)
    .delete(isLoggedIn, testUserAccount, testSuicide, controller.removeUserById);

    app.route('/user/me')
    .get(isLoggedIn, controller.getMe)
}

function isRegistrationForm(req: Request, res: Response, next: NextFunction) {
    req.checkBody("email", "`email` must be present and an email address").notEmpty().isEmail();
    req.checkBody("password", "`password` must be present").notEmpty();
    req.checkBody("role", "`role` must be present and a valid role").notEmpty().isInt({min: 1, max:2});
    req.checkBody("account_id", "`account_id` must be present and an int").notEmpty().isInt();

    const errors = req.validationErrors();
    if (errors) {
        return next(new BadRequestError(JSON.stringify(errors)));
    }

    if (req.user) {
        if (req.user.accountID != parseInt(req.body.account_id)) {
            return next(new ForbiddenError("users can only access their own accounts"));
        }
    } else {
        User.getAll(parseInt(req.body.account_id)).then((users) => {
            if (users.length > 0) {
                return next(new ForbiddenError("you have to be logged in"));
            }
        })
    }
    next();
}

function testUserAccount(req: Request, res: Response, next: NextFunction) {
    req.checkParams("id", "`id` must be present and an integer").notEmpty().isInt();
    const errors = req.validationErrors();
    if (errors) {
        return next(new BadRequestError(JSON.stringify(errors)));
    }
    
    User.getByID(parseInt(req.params.id)).then((user) => {
        if (user == null || user.accountID != req.user.accountID) {
            next(new ForbiddenError("You are not authorized to access this data"));
        } else {
            next();
        }
    })
}

function testSuicide(req: Request, res: Response, next: NextFunction) {
    if (req.user.id == parseInt(req.params.id)) {
        next(new BadRequestError("you can not delete yourself"));
    } else {
        next();
    }
}
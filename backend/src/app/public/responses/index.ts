import { Application, Request, Response, NextFunction } from 'express';
import controller from './controller';
import BadRequestError from '../../../lib/errors/BadRequestError';
import isLoggedIn from '../../../lib/middlewares/isLoggedIn';

export default function(app: Application) {
    app.route('/msgbox/:sid/response')
    .get(isLoggedIn, controller.getAllResponses)
    .post(controller.createResponse);

    app.route('/msgbox/:sid/response/:id')
    .put(isLoggedIn, checkSID, controller.updateReponse)
    .delete(isLoggedIn, checkSID, controller.removeResponse);
};

function checkResponseParams(req: Request, res: Response, next: NextFunction) {
    req.checkBody('publishable', '`publishable` required').notEmpty().isBoolean();
    req.checkBody('published', '`published` required').notEmpty().isBoolean();
    req.checkBody('email', '`email` required').notEmpty();
    req.checkBody('values', '`value` required').notEmpty();

    const errors = req.validationErrors();
    if (errors) {
        next(new BadRequestError(JSON.stringify(errors)));
    } else {
        next();
    }
}

function checkSID(req: Request, res: Response, next: NextFunction) {
    req.checkParams('sid', '`sid` required').notEmpty();

    const errors = req.validationErrors();
    if (errors) {
        next(new BadRequestError(JSON.stringify(errors)));
    } else {
        next();
    }
}

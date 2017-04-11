import { Application, Request, Response, NextFunction } from 'express';
import isAdmin    from '../../../lib/middlewares/isAdmin';
import isLoggedIn from '../../../lib/middlewares/isLoggedIn';
import BadRequestError from '../../../lib/errors/BadRequestError';

import controller from './controller';

export default function(app: Application) {
    app.route('/msgbox')
    .get(controller.getAllMsgBoxes)
    .post(isLoggedIn, checkMsgBoxProps, controller.createMsgBox);

    app.route('/msgbox/:sid')
    .get(checkSID, controller.getMsgBoxBySID)
    .put(isLoggedIn, checkSID, checkMsgBoxProps, controller.updateMsgBoxBySID)
    .delete(isLoggedIn, checkSID, controller.removeMsgBoxBySID);
}

function checkMsgBoxProps(req: Request, res: Response, next: NextFunction) {
    req.checkBody('type', '`type` required one of ["numeric", "text"]').notEmpty().isIn(['numeric', 'text']);
    req.checkBody('name', '`name` required').notEmpty();
    req.checkBody('opened', '`opened` bool').optional().isBoolean();

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

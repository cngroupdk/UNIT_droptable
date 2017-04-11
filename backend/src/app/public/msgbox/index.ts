import { Application } from 'express';
import isAdmin    from '../../../lib/middlewares/isAdmin';
import isLoggedIn from '../../../lib/middlewares/isLoggedIn';
import controller from './controller';

export default function(app: Application) {
    app.route('/msgbox')
    .get(controller.getAllMsgBoxes)
    .post(isLoggedIn, controller.createMsgBox);

    app.route('/msgbox/:sid')
    .get(controller.getMsgBoxBySID)
    .put(isLoggedIn, controller.updateMsgBoxBySID)
    .delete(isLoggedIn, controller.removeMsgBoxBySID);
}

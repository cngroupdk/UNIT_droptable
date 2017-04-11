import { Application } from 'express';
import isAdmin    from '../../../lib/middlewares/isAdmin';
import isLoggedIn from '../../../lib/middlewares/isLoggedIn';
import controller from './controller';

export default function(app: Application) {
    app.route('/accout')
    .post(controller.createAccount);

    app.route('/account/:id')
    .get(isLoggedIn, controller.getAccountName);
}

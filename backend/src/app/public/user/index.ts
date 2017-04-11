import { Application } from 'express';
import isAdmin    from '../../../lib/middlewares/isAdmin';
import isLoggedIn from '../../../lib/middlewares/isLoggedIn';
import controller from './controller';

export default function(app: Application) {
    console.log('Loaded users');
    app.route('/user')
    .get(isLoggedIn, controller.getAlUsers)
    .post(controller.createUser);

    app.route('/user/:id')
    .put(isLoggedIn, controller.updateUserById)
    .delete(isLoggedIn, controller.removeUserById);

    app.route('/user/me')
    .get(isLoggedIn, controller.getMe)
}

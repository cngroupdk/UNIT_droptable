import { Application } from 'express';
import account from './account';
import msgbox from './msgbox';
import user from './user';
import responses from './responses';
import version from './version';

export default function(app: Application) {
    account(app);
    msgbox(app);
    user(app);
    responses(app);
    version(app);
};

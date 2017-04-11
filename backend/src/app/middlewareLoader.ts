import { Application }  from 'express';
import compression      from 'compression';
import * as bodyParser  from 'body-parser';
import * as morgan      from 'morgan';
import * as helmet      from 'helmet';

import validator        from '../lib/validator';
import authorize        from '../lib/middlewares/authorize';

export default function(app: Application) {
    if (process.env.NODE_ENV === 'production') {
        app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time'));
        app.use(compression());
    } else {
        app.use(morgan('dev'));
        app.use(helmet.noCache());
    }

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(validator);
    app.use(authorize);

};

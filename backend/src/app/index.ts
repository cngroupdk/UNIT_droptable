import * as express     from 'express';
import middlewareLoader from './middlewareLoader';
import routeLoader      from './routeLoader';
import errorHandlers    from './errorHandlers';

const app = express();

app.set('title', 'Tell-Me Box REST API');
app.disable('x-powered-by');

middlewareLoader(app);
routeLoader(app);
errorHandlers(app);

export default app;

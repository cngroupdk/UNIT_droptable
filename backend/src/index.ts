import app from './app';
import * as config from 'config';

const port = process.env.PORT || config.get('main.port');
const server = app.listen(port, (err: Error) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Server running on port ' + port + '.');
    }
});

process.once('SIGINT', () => {
    server.close();
    return process.exit(0);
});

process.once('SIGTERM', () => {
    server.close();
    return process.exit(0);
});

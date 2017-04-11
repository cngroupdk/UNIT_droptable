import { Application } from 'express';
import internal from './internal';
import public_ from './public';

export default function(app: Application) {
    internal(app);
    public_(app);
};


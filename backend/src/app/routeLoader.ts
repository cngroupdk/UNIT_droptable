import { Application } from 'express';
import public_ from './public';

export default function(app: Application) {
    public_(app);
};


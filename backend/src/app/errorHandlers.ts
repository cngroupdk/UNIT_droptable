import { Application, Request, Response, NextFunction } from 'express';
import TellMeError from '../lib/errors/TellMeError';

export default function(app: Application) {
  app.use((err: TellMeError, req: Request, res: Response, next: NextFunction) => {
    if (!(err instanceof TellMeError)) {
      return void next(err);
    }

    res.statusCode    = err.code;
    res.statusMessage = err.message;
    res.send({
      status  : err.code,
      message : err.reason,
      name    : err.message
    });
  });

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (process.env.NODE_ENV !== 'production') {
      console.error(err);
    }

    res.statusCode    = 500;
    res.statusMessage = 'InternalServerError';
    res.send({
        status: 500,
        message: 'Something went wrong',
        name: 'Internal Server Error'
    });
  });
};

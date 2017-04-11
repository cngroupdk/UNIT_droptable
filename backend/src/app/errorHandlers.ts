import { Application, Request, Response, NextFunction } from 'express';
import StandartHttpError from 'standard-http-error';
import { Error } from 'standard-http-error';

export default function(app: Application) {
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    // if (!(err instanceof StandartHttpError)) {
      // return void next(err);
    // }

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
      console.log(err.message);
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

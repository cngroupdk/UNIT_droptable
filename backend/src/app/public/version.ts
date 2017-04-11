import { Application, Request, Response } from 'express';
const pkgJSON = require('../../../package.json');

export default function(app: Application) {
  app.get('/version', (req: Request, res: Response) => {
    res.status(200)
    .send({
      status: 'Success',
      version: pkgJSON.version,
      author: pkgJSON.author,
      description: pkgJSON.description
    });
  });
};

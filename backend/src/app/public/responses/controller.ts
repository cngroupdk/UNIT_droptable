import { Application, Request, Response, NextFunction } from 'express';
import BadRequestError from '../../../lib/errors/BadRequestError';
import Res from '../../../models/response';
import MsgBox from '../../../models/msgbox';

function getAllResponses(req: Request, res: Response, next: NextFunction) {
    const user = req.user;
    MsgBox.getBySID(req.params.sid)
    .then(res_ => Res.getAll(res_.id))
    .then(data => {
        res.status(200);
        res.send({
            status: 'Success',
            data
        })
    })
    .catch(() => next(new BadRequestError('No MsgBox with provided SID.')));
}

function createResponse(req: Request, res: Response, next: NextFunction) {
    const user = req.user;
    MsgBox.getBySID(req.params.sid)
    .then(msgBox => {
        const res_ = new Res(null, {
            publishable: +!!req.body.publishable,
            published: +!!req.body.published,
            email: req.body.email,
            value: req.body.value,
            accountID: msgBox.accountID,
            msgboxID: msgBox.id,
            timestamp: new Date()
        });
        return res_.insert();
    })
    .then(data => {
        res.status(201);
        res.send({
           status: 'Success',
           data
        });
    })
    .catch(() => next(new BadRequestError('No MsgBox with provided SID.')));
}

function updateReponse(req: Request, res: Response, next: NextFunction) {
    MsgBox.getBySID(req.params.sid)
    .then(msgBox => {
        const res_ = new Res(req.params.id, {
            publishable: +!!req.body.publishable,
            published: +!!req.body.published,
            email: req.body.email,
            value: req.body.value,
            accountID: msgBox.accountID,
            msgboxID: msgBox.id,
            timestamp: new Date()
        });
        return res_.update();
    })
    .then(data => {
        res.status(204);
        res.end();
    })
    .catch(() => next(new BadRequestError('No MsgBox with provided SID.')));
}

function removeResponse(req: Request, res: Response, next: NextFunction) {
    MsgBox.getBySID(req.params.sid)
    .then(msgBox => {
        const res_ = new Res(req.params.id, null);
        return res_.delete();
    })
    .then(data => {
        res.status(204);
        res.end();
    })
    .catch(() => next(new BadRequestError('No MsgBox with provided SID.')));
}

export default {
    getAllResponses,
    createResponse,
    updateReponse,
    removeResponse
};

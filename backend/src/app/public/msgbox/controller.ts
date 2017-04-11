import { Request, Response, NextFunction } from 'express';
import BadRequestError from '../../../lib/errors/BadRequestError'
import MsgBox from '../../../models/msgbox';

function getAllMsgBoxes(req: Request, res: Response, next: NextFunction) {
    const user = req.user;
    MsgBox.getAll(user.accountID)
    .then(data_ => {
        res.status(200);
        res.send({
            status: 'Success',
            data: data_
        });
    })
    .catch(next);
}

function createMsgBox(req: Request, res: Response, next: NextFunction) {
    const user = req.user;
    const msgBox = new MsgBox(null, req.body.type, null, req.body.opened, req.body.name, user.accountID, user.id);
    msgBox.insert()
    .then(data => {
        res.status(201);
        res.send({
            status: 'Success',
            data: {
                sid: data.sid,
                type: data.type,
                name: data.name,
            }
        });
    })
    .catch(next);
}

function getMsgBoxBySID(req: Request, res: Response, next: NextFunction) {
    const user = req.user;
    MsgBox.getBySID(req.params.sid)
    .then(data => {
        res.status(200);
        res.send({
            status: 'Success',
            data: {
                sid: data.sid,
                type: data.type,
                name: data.name,
            }
        });
    })
    .catch(() => next(new BadRequestError('No MsgBox with provided SID.')));
}

function updateMsgBoxBySID(req: Request, res: Response, next: NextFunction) {
    const user = req.user;
    const msgBox = new MsgBox(req.params.sid, req.body.type, null, req.body.opened, req.body.name, user.accountID, user.id);
    msgBox.update()
    .then(data => {
        console.log(data);
        res.status(204);
        res.end();
    })
    .catch(() => next(new BadRequestError('No MsgBox with provided SID.')));
}

function removeMsgBoxBySID(req: Request, res: Response, next: NextFunction) {
    const user = req.user;
    MsgBox.getBySID(req.params.sid)
    .then(msgBox => msgBox.delete())
    .then(() => {
        res.status(204);
        res.end();
    })
    .catch(() => next(new BadRequestError('No MsgBox with provided SID.')));
}

export default {
    getAllMsgBoxes,
    createMsgBox,
    getMsgBoxBySID,
    updateMsgBoxBySID,
    removeMsgBoxBySID
};

import { Request, Response, NextFunction } from 'express';

function getAllMsgBoxes(req: Request, res: Response, next: NextFunction) {
    next();
}

function createMsgBox(req: Request, res: Response, next: NextFunction) {
    next();
}

function getMsgBoxBySID(req: Request, res: Response, next: NextFunction) {
    next();
}

function updateMsgBoxBySID(req: Request, res: Response, next: NextFunction) {
    next();
}

function removeMsgBoxBySID(req: Request, res: Response, next: NextFunction) {
    next();
}

export default {
    getAllMsgBoxes,
    createMsgBox,
    getMsgBoxBySID,
    updateMsgBoxBySID,
    removeMsgBoxBySID
};

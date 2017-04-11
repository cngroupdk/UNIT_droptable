/**
 * Module dependencies.
 */
import TellMeError from './TellMeError';
import { ErrorProperties } from './TellMeError';

/**
 * @class NotFoundErr
 */
export default class NotFoundErr extends TellMeError {
    constructor(reason?: string, properties?: ErrorProperties) {
        properties = Object.assign({
            code: 404,
            name: 'Not found',
            reason
        }, properties);
        super(null, properties);
    }
}

/**
 * Module dependencies.
 */
import TellMeError from './TellMeError';
import { ErrorProperties } from './TellMeError';

/**
 * @class BadRequestError
 */
export default class BadRequestError extends TellMeError {
    constructor(reason?: string, properties?: ErrorProperties) {
        properties = Object.assign({
            code: 401,
            name: 'Unauthorized',
            reason
        }, properties);
        super(null, properties);
    }
}

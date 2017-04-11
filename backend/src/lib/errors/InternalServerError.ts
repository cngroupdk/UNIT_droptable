/**
 * Module dependencies.
 */
import TellMeError from './TellMeError';
import { ErrorProperties } from './TellMeError';

/**
 * @class InternalServerError
 */
export default class InternalServerError extends TellMeError {
    constructor(reason?: string, properties?: ErrorProperties) {
        properties = Object.assign({
            code: 500,
            name: 'Internal server error',
            reason
        }, properties);
        super(null, properties);
    }
}

/**
 * Module dependencies.
 */
import TellMeError from './TellMeError';
import { ErrorProperties } from './TellMeError';

/**
 * @class ForbiddenError
 */
export default class ForbiddenError extends TellMeError {
    constructor(reason?: string, properties?: ErrorProperties) {
        properties = Object.assign({
            code: 403,
            name: 'Forbidden',
            reason
        }, properties);
        super(null, properties);
    }
}

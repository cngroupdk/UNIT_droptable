/**
 * Module dependencies.
 */
const HttpError = require('standard-http-error');

interface StandardHttpError {
    new (param?: any): StandardHttpError
}

export interface ErrorProperties {
    code: number | string,
    inner: string | Error,
    name: string,
    reason: string
}

/**
 * @class TellMeError
 *
 * Base class for all HTTP errors.
 */

// Figure out HTTPError
export default class TellMeError extends Error {
    constructor(messageOrError?: string | Error, properties?: ErrorProperties) {
        const message = messageOrError instanceof Error ? messageOrError.message : messageOrError;
        const error   = messageOrError instanceof Error ? messageOrError : null;

        if (error) {
            properties.inner = error;
        }
        super(/*properties.code, message, properties*/);
    }
}

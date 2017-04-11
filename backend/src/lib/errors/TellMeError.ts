/**
 * Module dependencies.
 */

export interface ErrorProperties {
    code: number,
    inner: string | Error,
    name: string,
    reason: string
}

/**
 * @class TellMeError
 *
 * Base class for all HTTP errors.
 */

export default class TellMeError extends Error {
    public code: number;
    public reason?: string;

    constructor(messageOrError?: string | Error, properties?: ErrorProperties) {
        const message = messageOrError instanceof Error ? messageOrError.message : messageOrError;
        const error   = messageOrError instanceof Error ? messageOrError : null;

        if (error) {
            properties.inner = error;
        }
        super(properties.name);
        this.code = properties.code;
        this.reason = properties.reason;
    }
}

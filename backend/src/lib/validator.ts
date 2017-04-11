const expressValidator = require('express-validator');
import * as moment from 'moment';

function errorFormatter(param, message, value) {
    const namespace = param.split('.');
    const root      = namespace.shift();
    let formParam   = root;

    while (namespace.length) {
        formParam += '[' + namespace.shift() + ']';
    }
    return { formParam, message, value };
}

export default expressValidator({errorFormatter, customValidators: {
            isHttps: (value) => {
                return /^https:/.test(value);
            },
            isArray: (value) => {
                return Array.isArray(value);
            },
            itemsAreInt: (value) => {
                if (!Array.isArray(value)) {
                    return false;
                }

                for (let i in value) {
                    if (!Number.isInteger(Number(i))) {
                        return false;
                    }
                }
                return true;
            },
            lte: (value, number) => {
                return Number(value) <= number;
            },
            isBoolean: (value) => {
                if (typeof value === 'boolean') {
                    return true;
                }
                if (typeof value === 'string') {
                    return (value.toLowerCase() in ['true', 'false']);
                }
                return false;
            },
            isAscOrDesc: (value) => {
                return value.toLowerCase() in ['asc', 'desc'];
            },
            isUnixDate: (value) => {
                return /^\d{4}-\d{2}-\d{2}$/.test(value);
            },
            greaterDate: (end, start) => {
                return new Date(end) >= new Date(start);
            },
            isTime: (value) => {
                const formats = ["YYYY-MM-DD HH:mm:ss"];
                return moment(`2016-01-01 ${value}`, formats, true).isValid();
            },
            isEqual: (value, otherValue) => {
                return value === otherValue;
            },
            isObject: (value) => {
                return value instanceof Object;
            }
        }
    }
);

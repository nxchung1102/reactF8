// c1
// export const TYPE_LOG = 'log';
// export const TYPE_WARN = 'warn';
// export const TYPE_ERROR = 'error';

import { TYPE_LOG } from '../contants.js'

function logger(log, type = TYPE_LOG) {
    console[type](log)
}

export default logger
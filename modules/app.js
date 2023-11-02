import logger from './logger/index.js';

// c1
// import {
//     TYPE_LOG,
//     TYPE_WARN,
//     TYPE_ERROR
// } from './contants.js'

// c2
import * as contants from './contants.js';
console.log(contants)

logger('test messeage..', contants.TYPE_WARN);
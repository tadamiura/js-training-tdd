'use strict';

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code:
const cutEnd = str.lenght - 2;

const cutFirst = (str) => {
    str.substr(2, str.lenght)
}
    
const cutLast = (str) => {
    str.substr(0, cutEnd)
}

const cutFirstLast = (str) => {
    str.substring(2, cutEnd)
}
//* Begin of tests
const assert = require('assert');

assert.fail('You must write your own tests');
// End of tests */

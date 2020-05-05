'use strict';

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:
const keepFirst = (str) => {
    return str.substr(0,2)
}

const keepLast = (str) => {
    return str.substr(str.length - 2, 2)
}

//* Begin of tests
const assert = require('assert');

assert.deepStrictEqual(keepFirst('yoloyolo'), 'yo')
assert.deepStrictEqual(keepFirst('manger'), 'ma')

assert.deepStrictEqual(keepLast('mamamiamamia'), 'ia')
assert.deepStrictEqual(keepLast('yolo'), 'lo')


// assert.fail('You must write your own tests');
// End of tests */

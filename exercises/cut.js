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

const cutFirst = (str) => {
    return str.substr(2, str.lenght)
}

const cutLast = (str) => {
    return str.substr(0, str.length -2)
}

const cutFirstLast = (str) => {
    return str.substring(2, str.length -2)
}
//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof cutFirstLast, 'function');
assert.strictEqual(cutFirstLast.length, 1);
assert.strictEqual(typeof cutLast, 'function');
assert.strictEqual(cutLast.length, 1);
assert.strictEqual(typeof cutFirstLast, 'function');
assert.strictEqual(cutFirstLast.length, 1);

assert.deepStrictEqual(cutFirst('abracadabra'), 'racadabra');
assert.deepStrictEqual(cutFirst('Hello world'), 'llo world');


assert.deepStrictEqual(cutLast('abracadabra'), 'abracadab');
assert.deepStrictEqual(cutLast('Hello world'), 'Hello wor');

assert.deepStrictEqual(cutFirstLast('abracadabra'), 'racadab');
assert.deepStrictEqual(cutFirstLast('Hello world'), 'llo wor');
// assert.fail('You must write your own tests');
// End of tests */

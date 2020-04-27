'use strict';

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

// Your code:
const yell = (str) => {
    str.toUpperCase()
}
 return yell
//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof sentence, 'function');
assert.strictEqual(sentence.length, 1);
assert.deepStrictEqual(sentence('abc'), 'ABC');
assert.deepStrictEqual(sentence('Hello World'), 'HELLO WORLD');
assert.deepStrictEqual(sentence('UPPERCASE'), 'UPPERCASE');
assert.deepStrictEqual(sentence('1'), '1');


assert.fail('You must write your own tests');
// End of tests */

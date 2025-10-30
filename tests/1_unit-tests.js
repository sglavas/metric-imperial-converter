const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Number Tests', function(){
    // #1
    test('convertHandler should correctly read a whole number input', () => {
        assert.equal(convertHandler.getNum('5gal'), '5', 'The function correctly reads a whole number')
    })
    // #2
    test('convertHandler should correctly read a decimal number input', () => {
        assert.equal(convertHandler.getNum('5.5gal'), '5.5', 'The function correctly reads a decimal number')
    })
    // #3
    test('convertHandler should correctly read a fractional input', () => {
        assert.equal(convertHandler.getNum('5/5gal'), '5/5', 'The function correctly reads a fraction')
    })
    // #4
    test('convertHandler should correctly read a fractional input with a decimal', () => {
        assert.equal(convertHandler.getNum('5.5/5gal'), '5.5/5', 'The function correctly reads a fraction with a decimal')
    })
});
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
    // #5
    test('convertHandler  should correctly return an error on a double-fraction', () => {
        assert.isNotTrue(convertHandler.getNum('5/5/5'), 'The function returns an error on a double function')
    })
    // #6
    test('convertHandler should correctly default to a numerical input of 1 when no numerical input is provided', () => {
        assert.equal(convertHandler.getNum('gal'), '1', 'The function returns a 1 when no number is provided')
    })
});

suite('Unit Tests', () => {
    // #7
    test('convertHandler should correctly read each valid input unit', () => {
        assert.equal(convertHandler.getUnit('gal'), 'gal', 'The function returns a valid unit')
    })
    // #8
    test('convertHandler should correctly return an error for an invalid input', () => {
        assert.isNotTrue(convertHandler.getUnit('gals'), 'The function returns an error on invalid unit')
    })
    // #9
    test('convertHandler should return the correct return unit for each valid input unit', () => {
        assert.equal(convertHandler.getReturnUnit('gal'), 'L', 'The function returns the correct return unit for valid input')
    })
    // #10
    test('convertHandler should correctly return the spelled-out string unit for each valid input unit', () => {
        assert.equal(convertHandler.spellOutUnit('gal'), 'gallons', 'The function returns the correct spelled-out string')
    })
    // #11
    test('convertHandler should correctly convert gal to L', () => {
        assert.equal(convertHandler.getReturnUnit('gal'), 'L', 'The function converts gal to L')
    })
    // #12
    test('convertHandler should correctly convert L to gal', () => {
        assert.equal(convertHandler.getReturnUnit('L'), 'gal', 'The function converts L to gal')
    })
    // #13
    test('convertHandler should correctly convert mi to km', () => {
        assert.equal(convertHandler.getReturnUnit('mi'), 'km', 'The function converts mi to km')
    })
    // #14
    test('convertHandler should correctly convert km to mi', () => {
        assert.equal(convertHandler.getReturnUnit('km'), 'mi', 'The function converts km to mi')
    })
    // #15
    test('convertHandler should correctly convert lbs to kg', () => {
        assert.equal(convertHandler.getReturnUnit('lbs'), 'kg', 'The function converts lbs to kg')
    })
    // #16
    test('convertHandler should correctly convert kg to lbs', () => {
        assert.equal(convertHandler.getReturnUnit('kg'), 'lbs', 'The function converts kg to lbs')
    })
})
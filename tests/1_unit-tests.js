const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Number Tests', function(){
    // #1
    test('#1 convertHandler should correctly read a whole number input', () => {
        assert.equal(convertHandler.getNum('5gal'), 5, 'The function correctly reads a whole number')
    })
    // #2
    test('#2 convertHandler should correctly read a decimal number input', () => {
        assert.equal(convertHandler.getNum('5.5gal'), 5.5, 'The function correctly reads a decimal number')
    })
    // #3
    test('#3 convertHandler should correctly read a fractional input', () => {
        assert.equal(convertHandler.getNum('5/5gal'), 1, 'The function correctly reads a fraction')
    })
    // #4
    test('#4 convertHandler should correctly read a fractional input with a decimal', () => {
        assert.equal(convertHandler.getNum('5.5/5gal'), 1.1, 'The function correctly reads a fraction with a decimal')
    })
    // #5
    test('#5 convertHandler  should correctly return an error on a double-fraction', () => {
        assert.isNotTrue(convertHandler.getNum('5/5/5'), 'The function returns an error on a double function')
    })
    // #6
    test('#6 convertHandler should correctly default to a numerical input of 1 when no numerical input is provided', () => {
        assert.equal(convertHandler.getNum('gal'), 1, 'The function returns a 1 when no number is provided')
    })
});

suite('Unit Tests', () => {
    // #7
    test('#7 convertHandler should correctly read each valid input unit', () => {
        assert.equal(convertHandler.getUnit('KG'), 'kg', 'The function returns a valid unit')
        assert.equal(convertHandler.getUnit('MI'), 'mi', 'The function returns a valid unit')
        assert.equal(convertHandler.getUnit('KM'), 'km', 'The function returns a valid unit')
        assert.equal(convertHandler.getUnit('GAL'), 'gal', 'The function returns a valid unit')
        assert.equal(convertHandler.getUnit('L'), 'L', 'The function returns a valid unit')
        assert.equal(convertHandler.getUnit('LBS'), 'lbs', 'The function returns a valid unit')
    })
    // #8
    test('#8 convertHandler should correctly return an error for an invalid input', () => {
        assert.equal(convertHandler.getUnit('gals'), undefined, 'The function returns an error on invalid unit')
    })
    // #9
    test('#9 convertHandler should return the correct return unit for each valid input unit', () => {
        assert.equal(convertHandler.getReturnUnit('gal'), 'L', 'The function returns the correct return unit for valid input')
        assert.equal(convertHandler.getReturnUnit('MI'), 'km', 'The function returns the correct return unit for valid input')
        assert.equal(convertHandler.getReturnUnit('KM'), 'mi', 'The function returns the correct return unit for valid input')
        assert.equal(convertHandler.getReturnUnit('L'), 'gal', 'The function returns the correct return unit for valid input')
        assert.equal(convertHandler.getReturnUnit('kg'), 'lbs', 'The function returns the correct return unit for valid input')
        assert.equal(convertHandler.getReturnUnit('lbs'), 'kg', 'The function returns the correct return unit for valid input')
    })
    // #10
    test('#10 convertHandler should correctly return the spelled-out string unit for each valid input unit', () => {
        assert.equal(convertHandler.spellOutUnit('GAL'), 'gallons', 'The function returns the correct spelled-out string')
        assert.equal(convertHandler.spellOutUnit('LBS'), 'pounds', 'The function returns the correct spelled-out string')
        assert.equal(convertHandler.spellOutUnit('KM'), 'kilometers', 'The function returns the correct spelled-out string')
        assert.equal(convertHandler.spellOutUnit('MI'), 'miles', 'The function returns the correct spelled-out string')
        assert.equal(convertHandler.spellOutUnit('KG'), 'kilograms', 'The function returns the correct spelled-out string')
        assert.equal(convertHandler.spellOutUnit('L'), 'liters', 'The function returns the correct spelled-out string')
    })
    
    
})

suite('Unit Conversion Tests', () => {    
    // #11
    test('#11 convertHandler should correctly convert kg to lbs', () => {
        assert.equal(convertHandler.convert(2, 'KG'), 4.40925, 'The function converts kg to lbs')
        assert.equal(convertHandler.convert(5.567, 'KG'), 12.27314, 'The function converts kg to lbs')
    })
    // #12
    test('#12 convertHandler should correctly convert lbs to kg', () => {
        assert.equal(convertHandler.convert(40, 'LBS'), 18.14368, 'The function converts lbs to kg')
    })
    // #13
    test('#13 convertHandler should correctly convert km to mi', () => {
        assert.equal(convertHandler.convert(90, 'KM'), 55.92355, 'The function converts mi to km')
    })
    // #14
    test('#14 convertHandler should correctly convert mi to km', () => {
        assert.equal(convertHandler.convert(100, 'MI'), 160.934, 'The function converts km to mi')
        assert.equal(convertHandler.convert(4 / 5, 'MI'), 1.28747, 'The function converts km to mi')
    })
    // #15
    test('#15 convertHandler should correctly convert lbs to kg', () => {
        assert.equal(convertHandler.convert(4, 'GAL'), 15.14164, 'The function converts lbs to kg')
    })
    // #16
    test('#16 convertHandler should correctly convert kg to lbs', () => {
        assert.equal(convertHandler.convert(5, 'L'), 1.32086, 'The function converts kg to lbs')
    })
})

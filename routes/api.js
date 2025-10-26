'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.get('/api/convert', (req, res) => {
    // Get input from input field
    const { input } = req.query;

    const inputNumber = convertHandler.getNum(input);
    const inputUnit = convertHandler.getUnit(input);

    // Validate number and unit
    if(!inputNumber && !inputUnit){
      res.send("invalid number and unit");
      return;
    };

    // Validate number
    if(!inputNumber){
      res.send("invalid number");
      return;
    };

    // Validate unit
    if(!inputUnit){
      res.send("invalid unit");
      return
    }

    // Convert to metric/imperial value
    const finalNumber = convertHandler.convert(inputNumber, inputUnit);
    // Pair metric/imperial unit
    const finalUnit = convertHandler.getReturnUnit(inputUnit);

    // Get spelled-out units for the string message
    const inputWholeUnit = convertHandler.spellOutUnit(inputUnit);
    const finalWholeUnit = convertHandler.spellOutUnit(finalUnit);


    res.json(
      { 
        initNum: inputNumber,
        initUnit: inputUnit,
        returnNum: finalNumber,
        returnUnit: finalUnit,
        string: convertHandler.getString(inputNumber, inputWholeUnit, finalNumber, finalWholeUnit)
      });
  })
};

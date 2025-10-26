'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.get('/api/convert', (req, res) => {
    // Get input from input field
    const { input } = req.query;

    // Validate number and unit
    if(!convertHandler.getNum(input) && !convertHandler.getUnit(input)){
      console.log("invalid number and unit")
      return;
    };

    // Validate number
    if(!convertHandler.getNum(input)){
      console.log("invalid number")
      return;
    };

    // Validate unit
    if(!convertHandler.getUnit(input)){
      console.log("invalid unit");
      return;
    }

    res.json({ initNum: validUnit[1], initUnit: validUnit[2], returnNum: "", returnUnit: convertHandler.convert(validUnit[1], validUnit[2]), string: "" })
  })
};

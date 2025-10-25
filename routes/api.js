'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.get('/api/convert', (req, res) => {
    // Get input from input field
    const { input } = req.query;

    // Validate input
    let validUnit = convertHandler.isValidUnit(input);
    console.log(validUnit);

    // If input is not a valid unit
    if(!validUnit){
      res.send("invalid unit");
      return;
    }

    res.json({ initNum: validUnit[1], initUnit: validUnit[2], returnNum: "", returnUnit: convertHandler.convert(validUnit[1], validUnit[2]), string: "" })
  })
};

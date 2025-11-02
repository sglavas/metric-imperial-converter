const math = require('mathjs');

function ConvertHandler() {

  this.getNum = function(input) {
    // Check if the number is missing
    if(input.match(/^(gal|l|lbs|kg|mi|km)$/i)){
      // If the number is missing, return the default number, i.e. 1
      return 1;
    }

    //Check if the number is a whole number, decimal, fraction or fraction with decimal
    let result = input.match(/^(?!.*\d+(?:\.\d+){2})\d*\.?\d*\/?\d*\.?\d*/)[0];
    
    
    // Check if there are letters before any digit
    if(input.match(/[a-z]\d/ig)){
      return false;
    }
    
    // Check if the fraction has more than 1 slash
    if((input.match(/\//g) || []).length > 1){
      return false;
    }
    
    // If the fraction has 1 slash
    if((input.match(/\//g) || []).length === 1){
      //Ensure that there are numbers on both sides of the slash
      const validFraction = input.match(/(?!.*\d+(?:\.\d+){2})\d*\.?\d*\/\d+\.?\d*/);
      
      //If not, return false
      if(!validFraction){
        return false;
      }
    }
    
    if(result == undefined){
      result = 1;
      return result;
    }


    const resultNum = math.evaluate(result)


    return resultNum;
  };
  
  this.getUnit = function(input) {
    let result = input.match(/(gal|l|lbs|kg|mi|km)$/i);

    // If no valid unit
    if(!result){
      return undefined;
    }

    // If the unit is valid
    const finalUnit = result[1].toLowerCase();


    // Capitalize l
    if(finalUnit === "l"){
      return "L"
      //return finalUnit.toUpperCase();
    }

    
    return finalUnit;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;

    const lowerCaseUnit = initUnit.toLowerCase();

    // Convert initial unit to return unit
    switch(lowerCaseUnit) {
      case "gal":
          result = "L";
          break;
      case "l":
      case "L":
          result = "gal";
          break;
      case "lbs":
          result = "kg";
          break;
      case "kg":
          result = "lbs";
          break;
      case "mi":
          result = "km";
          break;
      case "km":
          result = "mi";
          break;
    }

    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;

    const lowerCaseUnit = unit.toLowerCase();

    // Match unit to full name
    switch(lowerCaseUnit) {
      case "gal":
          result = "gallons";
          break;
      case "l":
      case "L":
          result = "liters";
          break;
      case "lbs":
          result = "pounds";
          break;
      case "kg":
          result = "kilograms";
          break;
      case "mi":
          result = "miles";
          break;
      case "km":
          result = "kilometers";
          break;
    }

    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    const lowerCaseUnit = initUnit.toLowerCase();

    // Match the unit and handle conversion
    switch(lowerCaseUnit) {
          case "gal":
              result = initNum * galToL;
              //result = math.multiply(initNum, galToL);
              //result = math.evaluate(`${initNum} gal to l`);
              break;
          case "l":
          case "L":
              result = initNum / galToL;
              //result = math.divide(initNum, galToL);
              //result = math.evaluate(`${initNum} l to gal`);
              break;
          case "lbs":
              result = initNum * lbsToKg;
              //result = math.multiply(initNum, lbsToKg);
              //result = math.evaluate(`${initNum} lbs to kg`);
              break;
          case "kg":
              result = initNum / lbsToKg;
              //result = math.divide(initNum, lbsToKg);
              //result = math.evaluate(`${initNum} kg to lbs`);
              break;
          case "mi":
              result = initNum * miToKm;
              //result = math.multiply(initNum, miToKm);
              //result = math.evaluate(`${initNum} mi to km`);
              break;
          case "km":
              result = initNum / miToKm;
              //result = math.divide(initNum, miToKm);
              //result = math.evaluate(`${initNum} km to mi`);
              break;
    }

    let roundedNumber = result.toFixed(5);


    // Round the number to 5 decimal points
    //let roundedNumber = math.round(result.toNumber(), 5);

    return roundedNumber;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;

    // Create string using initial number and unit, and return number an unit
    result = `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;
    return result;
  };
  
}

module.exports = ConvertHandler;

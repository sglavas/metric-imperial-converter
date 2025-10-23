function ConvertHandler() {
  
  this.isValidUnit = function(input) {
    let result = input.match(/^\d+(gal|l|lbs|kg|mi|km)$/i);

    return result;
  }

  this.getNum = function(input) {
    let result = input.match(/\d+/)[0];
    
    return result;
  };
  
  this.getUnit = function(input) {
    let result = input.match(/^\d+(gal|l|lbs|kg|mi|km)$/i)[1].toLowerCase();
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;

    switch(initUnit) {
      case "gal":
          result = "L";
          break;
      case "l":
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
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;

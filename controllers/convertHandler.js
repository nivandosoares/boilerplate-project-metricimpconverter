/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  let inputRegex = /[a-z]+|[^a-z]+/gi;

  this.getNum = function (input) {
    let result;
    if (input.match(/[^a-z]+/gi) === null) {
      result = 1;
    } else {
      result = input.match(inputRegex)[0];
      result = result.split("/").length > 2 ? "invalid number" : eval(result);
    }
    return result;
  };

  this.getUnit = function (input) {
    let result;
    let validUnit = ["gal", "l", "mi", "km", "lbs", "kg"];
    if (input.match(/[a-z]+/gi) !== null) {
      if (input.match(/[a-z]+/gi).length === 1) {
        result = validUnit.includes(input.match(/[a-z]+/gi)[0].toLowerCase())
          ? input.match(/[a-z]+/gi)[0].toLowerCase()
          : "invalid unit";
      } else {
        result = "invalid unit";
      }
    } else {
      result = "invalid unit";
    }
    result = result === "l" ? "L" : result;
    return result;
  };

  this.getReturnUnit = function (initUnit) {
    initUnit = initUnit.toLowerCase();
    let units = {
      gal: "L",
      l: "gal",
      mi: "km",
      km: "mi",
      lbs: "kg",
      kg: "lbs",
    };
    return units[initUnit];
  };

  this.spellOutUnit = function (unit) {
    unit = unit.toLowerCase();
    let units = {
      gal: "gallons",
      l: "liters",
      mi: "miles",
      km: "kilometers",
      lbs: "pounds",
      kg: "kilograms",
    };
    return units[unit];
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    initNum = eval(initNum);
    initUnit = initUnit.toLowerCase();
    switch (initUnit) {
      case "gal":
        result = initNum * galToL;
        break;
      case "l":
        result = initNum / galToL;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum / miToKm;
        break;
      default:
        result = "invalid unit";
    }
    result = parseFloat(result.toFixed(5));
    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return (
      initNum +
      " " +
      this.spellOutUnit(initUnit) +
      " converts to " +
      returnNum +
      " " +
      this.spellOutUnit(returnUnit)
    );
  };
}

module.exports = ConvertHandler;

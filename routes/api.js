/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();

  app.route("/api/convert").get(function (req, res) {
    let input = req.query.input;

    let error = "";

    if (convertHandler.getNum(input) === "invalid number") {
      error = "invalid number";
    }
    if (convertHandler.getUnit(input) === "invalid unit") {
      error = error === "" ? "invalid unit" : "invalid number and unit";
    }
    if (error !== "") {
      res.send(error);
    }

    let initNum = convertHandler.getNum(input);
    let initUnit = convertHandler.getUnit(input);
    let returnNum = convertHandler.convert(initNum, initUnit);
    let returnUnit = convertHandler.getReturnUnit(initUnit);
    let toString = convertHandler.getString(
      initNum,
      initUnit,
      returnNum,
      returnUnit
    );
    res.json({
      initNum: initNum,
      initUnit: initUnit,
      returnNum: returnNum,
      returnUnit: returnUnit,
      string: toString,
    });
  });
};

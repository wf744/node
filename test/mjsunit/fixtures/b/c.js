var d = require("./d");

var assert = require("assert");

var package = require("./package");

assert.equal("world", package.hello);

debug("load fixtures/b/c.js");

var string = "C";

exports.C = function () {
  return string;
};

exports.D = function () {
  return d.D();
};

process.addListener("exit", function () {
  string = "C done";
  puts("b/c.js exit");
});

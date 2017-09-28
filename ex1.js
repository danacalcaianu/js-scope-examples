//Basic example demonstrating global vs local scope

var testScope = "global";

var firstFunction = function () {
    var testScope = "inside firstFunction";
    console.log(testScope);
};

firstFunction();
console.log(testScope);


var secondFunction = function () {
      testScope = "inside secondFunction";
};

secondFunction();
console.log(testScope);


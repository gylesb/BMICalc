var div = function(number1, number2) {
  return number1 / (number2^2);
};

var number1 = parseInt(prompt("Enter your weight in kg:"));
var number2 = parseInt(prompt("Enter your height m:"));
var result = div(number1, number2);
alert(result);

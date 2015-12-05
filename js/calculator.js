document.getElementByClass("floating-box-numbers").addEventListener("click");

var calculator = (function() {
  var module = {};
  var display;
  var cashReg;

  module.add = function ( a, b) {
    display = a + b;
    return  display;
  };

  module.subtract = function ( a, b) {
    return a - b;
  };

  module.multiply = function ( a, b) {
    return a * b;
  };

  module.divide = function ( a, b){
    return a / b;
  };

  module.deposit = function () {
    var num;
    cashReg+= display;
    num = display;
    display = 0;
    return num;
  };

  module.withdraw = function (){
    var num;
    cashReg-= display;
    num = display;
    display=0;
  };

  return module;

})();
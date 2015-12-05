var cashRegister = ( function () {
  var module = {};
  var display = 0;
  var memory = 0;
  var cashReg = 0;


  module.display =function (x) {
    if (display===0){
      document.getElementById("display").innerHTML = display;
    }else{
    document.getElementById("display").innerHTML+= display;
  }
  };

  module.clear = function () {
    display = 0;
    return 0;
  };

  module.balance = function () {
    display = cashReg;
    return display;
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
});

document.getElementById("1").addEventListener("click",calculator.display(1));
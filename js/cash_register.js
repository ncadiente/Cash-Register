var cashRegister = ( function () {
  var module = {};
  var numberArray=[];
  var display = 0;
  var a;
  var b;
  var memory = 0;
  var cashReg = 0;
  var operation;
  var lastPress;


  module.storeOp =function (event) {
    operation = calculator[event.currentTarget.id];
    a = display;
    lastPress = event.currentTarget.id;
    display = 0;
  };

  module.getBalance = function (event) {
    document.getElementById("display").innerHTML = "Balance : $" + cashReg;
  };

  module.depositCash = function (event) {
    cashReg = (parseFloat(cashReg) + parseFloat(display));
    display = 0;
    document.getElementById("display").innerHTML = display;
  };

  module.evaluate = function(event) {
    b = display;
    document.getElementById("display").innerHTML = operation(a,b);
    display = document.getElementById("display").innerHTML;
    lastPress = event.currentTarget.id;
  };

  module.clear = function(event) {
    display = 0;
    a = null;
    b = null;
    memory = 0;
    operation = null;
    document.getElementById("display").innerHTML = display;
  };

  module.point = function(event){
    var pointCheck = display.toString();
    if (pointCheck.includes(".")){

    }else{
    lastPress = event.currentTarget.id;
    }
  };

  module.withdrawCash = function(event) {
    document.getElementById("display").innerHTML = display;
    cashReg = (cashReg - display);
    display = 0;
    document.getElementById("display").innerHTML = display;
  };


  module.displayNum =function (event) {
    if (lastPress !== "button-." && display!==0){
      display = parseFloat(display + event.currentTarget.innerHTML);
      document.getElementById("display").innerHTML = display;
    }
    if (lastPress === "button-." && display!==0){
      display = parseFloat(display.toString() + "." + event.currentTarget.innerHTML);
      document.getElementById("display").innerHTML = display;
    }
    if (display===0 && lastPress !== "button-."){
      display = parseFloat(event.currentTarget.innerHTML);
      document.getElementById("display").innerHTML = display;
    }
    if (display===0 && lastPress === "button-."){
      display = parseFloat(event.currentTarget.innerHTML);
      document.getElementById("display").innerHTML = display;
    }
    lastPress = event.currentTarget.id;
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
})();

document.getElementById("button-1").addEventListener("click",cashRegister.displayNum);
document.getElementById("button-2").addEventListener("click",cashRegister.displayNum);
document.getElementById("button-3").addEventListener("click",cashRegister.displayNum);
document.getElementById("button-4").addEventListener("click",cashRegister.displayNum);
document.getElementById("button-5").addEventListener("click",cashRegister.displayNum);
document.getElementById("button-6").addEventListener("click",cashRegister.displayNum);
document.getElementById("button-7").addEventListener("click",cashRegister.displayNum);
document.getElementById("button-8").addEventListener("click",cashRegister.displayNum);
document.getElementById("button-9").addEventListener("click",cashRegister.displayNum);
document.getElementById("button-0").addEventListener("click",cashRegister.displayNum);
document.getElementById("button-00").addEventListener("click",cashRegister.displayNum);

document.getElementById("multiply").addEventListener("click",cashRegister.storeOp);
document.getElementById("divide").addEventListener("click",cashRegister.storeOp);
document.getElementById("add").addEventListener("click",cashRegister.storeOp);
document.getElementById("subtract").addEventListener("click",cashRegister.storeOp);

document.getElementById("evaluate").addEventListener("click",cashRegister.evaluate);

document.getElementById("clear").addEventListener("click",cashRegister.clear);

document.getElementById("button-.").addEventListener("click",cashRegister.point);

document.getElementById("get-balance").addEventListener("click",cashRegister.getBalance);

document.getElementById("deposit-cash").addEventListener("click",cashRegister.depositCash);

document.getElementById("withdraw-cash").addEventListener("click",cashRegister.withdrawCash);

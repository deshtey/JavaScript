const calc = {
  displayValue: "0",
  lastValueIsOperator: false,
  result: "",
  history: ""
};
const screenValue = document.getElementById("display");
screenValue.value = calc.displayValue;

const keys = document.querySelector(".keys");

//
keys.addEventListener("click", event => {
  const { target } = event;

  /*Only work with clicks on buttons and ignore clicks elsewhere */
  if (target.classList.contains("btn")) {
    /*if the button is a number key, then run the inputdigit function
        pass the buttons value as a parameter to the function
    */
    if (target.classList.contains("number")) {
      inputDigit(target.textContent);
      /*if the button is an operator key, then run the inputOperator function 
      passing the data as an argument*/
    } else if (target.classList.contains("operator")) {
      const operator = target.dataset.action;
      if (calc.lastValueIsOperator === false) {
        inputOperator(operator);
      }
    }
    //input a decimal
    if (target.dataset.action === "dot") {
      inputDecimal();
      //clear the calculator
    } else if (target.dataset.action === "clear") {
      clearAll();
      //calculate
    } else if (target.dataset.action === "calculate") {
      if (calc.lastValueIsOperator === true) {
        return;
      } else {
        calculate();
      }
    }
  }
  updateDisplay();
});

//
function inputOperator(operator) {
  switch (operator) {
    case "add":
      calc.displayValue += "+";
      break;
    case "subtract":
      calc.displayValue += "-";
      break;
    case "multiply":
      calc.displayValue += "*";
      break;
    case "divide":
      calc.displayValue += "/";
      break;
    default:
      break;
  }
  calc.lastValueIsOperator = true;
}

//
function inputDigit(digit) {
  if (calc.result && calc.lastValueIsOperator === false) {
    clearAll();
  }
  if (calc.displayValue === "0") {
    calc.displayValue = digit;
  } else {
    calc.displayValue += digit;
  }
  //calc.displayValue=calc.displayValue==="0"?
  calc.lastValueIsOperator = false;
  calc.result = "";
}

//
function inputDecimal() {
  if (!calc.displayValue.includes(".")) {
    calc.displayValue += ".";
  }
}

//
function updateDisplay() {
  screenValue.value = calc.displayValue;
}

//
function clearAll() {
  calc.displayValue = "0";
  calc.result = "";
  calc.lastValueIsOperator = false;
  calc.history = "";
  updateDisplay();
}
function calculate() {
  calc.history = calc.displayValue;
  calc.result = eval(calc.displayValue);
  calc.displayValue = calc.result;
}

let result = document.getElementById("result");
let currentInput = "";
let operator = "";
let firstValue = "";

function updateResult(value) {
  currentInput += value;
  result.value = currentInput;
}

// Number buttons
for (let i = 0; i <= 9; i++) {
  document.getElementById(i.toString()).addEventListener("click", () => {
    updateResult(i.toString());
  });
}

// Clear button
document.getElementById("clear").addEventListener("click", () => {
  currentInput = "";
  operator = "";
  firstValue = "";
  result.value = "";
});


document.getElementById("sum").addEventListener("click", () => setOperator("+"));
document.getElementById("diff").addEventListener("click", () => setOperator("-"));
document.getElementById("mul").addEventListener("click", () => setOperator("*"));
document.getElementById("divide").addEventListener("click", () => setOperator("/"));
document.getElementById("rem").addEventListener("click", () => setOperator("%"));

function setOperator(op) {
  if (currentInput === "") return;
  firstValue = currentInput;
  operator = op;
  currentInput = "";
  result.value = "";
}
document.getElementById("ans").addEventListener("click", () => {
  if (firstValue === "" || currentInput === "" || operator === "") return;

  let num1 = parseFloat(firstValue);
  let num2 = parseFloat(currentInput);
  let output;

  switch (operator) {
    case "+":
      output = num1 + num2;
      break;
    case "-":
      output = num1 - num2;
      break;
    case "*":
      output = num1 * num2;
      break;
    case "/":
      output = num2 !== 0 ? num1 / num2 : "Error";
      break;
    case "%":
      output = num1 % num2;
      break;
  }

  result.value = output;
  currentInput = output.toString();
  firstValue = "";
  operator = "";
});

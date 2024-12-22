const display = document.getElementById("display");
const numbersBtn = document.querySelectorAll(".number");

const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const multiBtn = document.getElementById("multi");
const divisonBtn = document.getElementById("divison");

const resultBtn = document.getElementById("result");

const percentBtn = document.getElementById("percent");
const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");
const allClearBtn = document.getElementById("clearAll");

display.addEventListener("input", () => {
  display.value = display.value.replace(/[^0-9.]/g, "");
});

numbersBtn.forEach((button) => {
  button.addEventListener("click", () => {
    display.value += button.textContent;
  });
});

clearBtn.addEventListener("click", () => {
  display.value = "";
});

allClearBtn.addEventListener("click", () => {
  display.value = "";
  action = "";
  firstOperand = "";
  currentOperation = "";
});

deleteBtn.addEventListener("click", () => {
  display.value = display.value.slice(0, -1);
});

percentBtn.addEventListener("click", () => {
  if (action === "") {
    display.value = parseFloat(display.value) / 100;
  } else {
    display.value = (firstOperand * parseFloat(display.value)) / 100;
  }
});

let action = "+";
let firstOperand = 0;
let currentOperation = 0;

plusBtn.onclick = function () {
  firstOperand = parseFloat(display.value);
  action = "+";
  display.value = "";
};

minusBtn.onclick = function () {
  firstOperand = parseFloat(display.value);
  action = "-";
  display.value = "";
};

multiBtn.onclick = function () {
  firstOperand = parseFloat(display.value);
  action = "*";
  display.value = "";
};

divisonBtn.onclick = function () {
  firstOperand = parseFloat(display.value);
  action = "/";
  display.value = "";
};

resultBtn.onclick = function () {
  currentOperation = parseFloat(display.value);

  if (action === "+") {
    firstOperand += currentOperation;
  }
  if (action === "-") {
    firstOperand -= currentOperation;
  }
  if (action === "/") {
    firstOperand /= currentOperation;
  }
  if (action === "*") {
    firstOperand *= currentOperation;
  }
  display.value = firstOperand;
};

document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (key === "Enter") {
    currentOperation = parseFloat(display.value);
  }
  if (key === "Backspace") {
  }
});

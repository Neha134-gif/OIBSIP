let expression = "";
let answer = "";

const exprDisplay = document.getElementById("expression");
const resultDisplay = document.getElementById("result");

function updateDisplay() {
  exprDisplay.textContent = expression;
  resultDisplay.textContent = answer;
}

document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    const val = btn.textContent;

    if (val === "C") {
      expression = "";
      answer = "";
    } else if (val === "DEL") {
      expression = expression.slice(0, -1);
    } else if (val === "ENTER" || val === "=") {
      try {
        let evalExpr = expression.replace(/√/g, "Math.sqrt");
        answer = eval(evalExpr);
      } catch {
        answer = "Error";
      }
    } else if (val === "ANS") {
      expression += answer.toString();
    } else {
      expression += val;
    }

    updateDisplay();
  });
});

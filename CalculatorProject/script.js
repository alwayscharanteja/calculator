let display = document.getElementById("display");

function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// NEW: Add keyboard input support
document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (!isNaN(key) || "+-*/.".includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (key === "Escape") {
    clearDisplay();
  }
});
function calculateRoot() {
  const input = document.getElementById("number-input").value;
  const regex = /^(-?\d+(\.\d+)?)([-+])(\d+(\.\d+)?)i$/;
  const match = input.match(regex);

  if (match) {
    const real = parseFloat(match[1]);
    const imag = parseFloat(match[4]);
    const sign = match[3];

    if (sign === "+") {
      const complex = math.complex(real, imag);
      const root = math.sqrt(complex);
      const result = `√${input} = <span>${root.toString()}</span>`;
      document.getElementById("result").innerHTML = result;
    } else {
      const result = "Введите корректное комплексное число!";
      document.getElementById("result").textContent = result;
    }
  } else {
    const number = parseFloat(input);

    if (!isNaN(number)) {
      const root = math.sqrt(number);
      const result = `√${number} = <span>${root}</span>`;
      document.getElementById("result").innerHTML = result;
    } else {
      const result = "Введите корректное число!";
      document.getElementById("result").textContent = result;
    }
  }
}
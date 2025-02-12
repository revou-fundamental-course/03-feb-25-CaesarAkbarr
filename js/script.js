// Data global
let celciusLabel = document.getElementById("celcius-name");
let fahrenheitLabel = document.getElementById("fahrenheit-name");
let celciusInput = document.getElementById("suhu-input");
let fahrenheitTextarea = document.getElementById("fahrenheit-textarea");
let info = document.getElementById("info");
let formula = document.getElementById("formula");
let resultArea = document.getElementById("result-textarea");
let input = document.getElementById("suhu-input");
let f = toFahrenheit(input);
let c = toCelsius(input);


// Perhitungan
function toFahrenheit(i) {
  return (i * 9 / 5) + 32;
}
function toCelsius(i) {
  return (i - 32) * 5 / 9;
}


// Reverse dari Celcius ke Fahrenheit dan sebaliknya
function reveseClick() {
  if (input.innerHTML == " ") {
    alert("Please enter a number");
  } else {
    if (celciusLabel.innerHTML == "Celcius (ºC)") {
      celciusLabel.innerHTML = "Fahrenheit (ºF)";
      fahrenheitLabel.innerHTML = "Celcius (ºC)";
      info.innerHTML = "Fahrenheit to Celcius";
      formula.innerHTML = "S(ºC) =(S(ºF) - 32) * (5/9)";
      let fahrenheitValue = toFahrenheit(celciusInput.value);
      fahrenheitTextarea.value = celciusInput.value;
      celciusInput.value = fahrenheitValue;
      resultArea.value ="(" + input + "℉ - 32) * (5/9) = " + c + "℃";
      convertClick();
    } else {
      celciusLabel.innerHTML = "Celcius (ºC)";
      fahrenheitLabel.innerHTML = "Fahrenheit (ºF)";
      info.innerHTML = "Celcius to Fahrenheit";
      formula.innerHTML = "S(ºF) =(S(ºC) × 9/5) + 32";
      let celciusValue = toCelsius(celciusInput.value);
      fahrenheitTextarea.value = celciusInput.value;
      celciusInput.value = celciusValue;
      resultArea.value ="(" + input + "℃ * 9/5) + 32 = " + f + "℉";
      convertClick();
    }
  }

}

// Reset data
function resetClick() {
  document.getElementById("suhu-input").value = "";
  document.getElementById("fahrenheit-textarea").value = "";
  document.getElementById("result-textarea").value = "";
}


// Validasi Input & Konversi
function convertClick() {
  if (input.value == "") {
    alert("Please enter a number");
  } else if (celciusLabel.innerHTML == "Celcius (ºC)") {
    let f = toFahrenheit(input.value);
    document.getElementById("fahrenheit-textarea").value = f;
    resultArea.value ="(" + input.value + "℃ * 9/5) + 32 = " + f + "℉";
  } else {
    let c = toCelsius(input.value);
    document.getElementById("fahrenheit-textarea").value = c;
    resultArea.value ="(" + input.value + "℉ - 32) * (5/9) = " + c + "℃";
  }
}



let celciusLabel = document.getElementById("celcius-name");
let fahrenheitLabel = document.getElementById("fahrenheit-name");
let celciusInput = document.getElementById("suhu-input");
let fahrenheitTextarea = document.getElementById("fahrenheit-textarea");


// Reverse dari Celcius ke Fahrenheit dan sebaliknya
function reveseClick() {

  if (celciusLabel.innerHTML == "Celcius(ºC)") {
    celciusLabel.innerHTML = "Fahrenheit(ºF)";
    fahrenheitLabel.innerHTML = "Celcius(ºC)";
    let fahrenheitValue = toFahrenheit(celciusInput.value);
    fahrenheitTextarea.value = celciusInput.value;
    celciusInput.value = fahrenheitValue;
  } else {
    celciusLabel.innerHTML = "Celcius(ºC)";
    fahrenheitLabel.innerHTML = "Fahrenheit(ºF)";
    let celciusValue = toCelsius(celciusInput.value);
    fahrenheitTextarea.value = celciusInput.value;
    celciusInput.value = celciusValue;
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
  let input = document.getElementById("suhu-input").value;
  if (input == "") {
    alert("Please enter a number");
  } else if (celciusLabel.innerHTML == "Celcius(ºC)") {
    let f = toFahrenheit(input);
    document.getElementById("fahrenheit-textarea").value = f;
    document.getElementById("result-textarea").value ="(" + input + "℃ * 9/5) + 32 = " + f + "℉";
  } else {
    let c = toCelsius(input);
    document.getElementById("fahrenheit-textarea").value = c;
    document.getElementById("result-textarea").value ="(" + input + "℉ - 32) * (5/9) = " + c + "℃";
  }
}


// Perhitungan
function toFahrenheit(input) {
  return (input * 9 / 5) + 32;
}
function toCelsius(input) {
  return (input - 32) * 5 / 9;
}

function reveseClick() {
  
}


function resetClick() {
  document.getElementById("celcius-input").value = "";
  document.getElementById("fahrenheit-textarea").value = "";
  document.getElementById("result-textarea").value = "";
}


function convertClick() {
  var c = document.getElementById("celcius-input").value;
  var f = toFahrenheit(c);
  document.getElementById("fahrenheit-textarea").value = f;
  document.getElementById("result-textarea").value = f;
}


function toFahrenheit(c) {
  return c * 9 / 5 + 32;
}
function convertCelciusToFahrenheit() {
  let celcius = document.getElementById("celcius-input").value;
  let fahrenheit = (celcius * 9/5) + 32;
  const output = document.getElementById("fahrenheit-textarea");
  output.innerHTML = fahrenheit;
};
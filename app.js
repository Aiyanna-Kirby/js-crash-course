// DRY - Don't repeat yourself

function convertCelciusToFahrenheit(cel) {
  return cel * 1.8 + 32;
}

console.log(convertCelciusToFahrenheit(0));
console.log(convertCelciusToFahrenheit(10));
console.log(convertCelciusToFahrenheit(30));

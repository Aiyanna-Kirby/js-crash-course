// DRY - Don't repeat yourself

function convertToBoolean(arr) {
  let booleanValues = [];
  for (let i = 0; i < arr.length; ++i) {
    if (!!arr[i] == true) {
      booleanValues.push(true);
    
    } else if (!!arr[i] === false) {
      booleanValues.push(false);
    }
  }
  return booleanValues
}

console.log(convertToBoolean([500, 0, "Aiyanna", "", []]));

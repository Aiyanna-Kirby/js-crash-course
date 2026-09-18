// DRY - Don't repeat yourself

function convertToZeros(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; ++i) {
    newArr[i] = 0;
  }
  return newArr;
}

console.log(convertToZeros([12, 4, 7]));

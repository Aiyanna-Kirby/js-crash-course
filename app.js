// DRY - Don't repeat yourself

function sortLowToHigh(numbers) {
  return numbers.sort((a, b) => a - b);
}

console.log(sortLowToHigh([4, 27, 3, 37, 100]));

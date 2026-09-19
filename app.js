// DRY - Don't repeat yourself

function removeApples(arr) {
  return arr.filter(elm => elm !== 'apple')
}

console.log(removeApples(["banana", "apple", "orange", "apple"]));

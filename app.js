// DRY - Don't repeat yourself

function removeApples(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] !== 'apple') 
      newArr.push(arr[i])
    }
    return newArr
  }

console.log(removeApples(['banana', 'apple', 'orange', 'apple']));

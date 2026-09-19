// DRY - Don't repeat yourself

function filterOutFalsy(arr) {
  return arr.filter(elm => !!elm === true)
}

console.log(filterOutFalsy(['banana', null]))
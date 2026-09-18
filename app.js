// DRY - Don't repeat yourself

function reverseString(string) {
  let reversedString = '';
  for (let i = 0; i < string.length; ++i) {
    reversedString = string[i] + reversedString
  }
  return reversedString
}

console.log(reverseString('yurt'))
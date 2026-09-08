// DRY - Don't repeat yourself

// Array Filter Practice
let arr = ["A+", "A", "FAIL"];

let newArr = arr.filter((element) => {
  return element === "A+" || element === "A";
});

console.log(newArr);

let arr2 = ["FAIL", "FAIL", "B"];

let newArr2 = arr2.filter((element) => {
  return element === "B";
});

console.log(newArr2);

let arr3 = ["FAIL"];

let newArr3 = arr3.filter((element) => {
  return element === "";
});

console.log(newArr3);

// DRY - Don't repeat yourself

//let arr = [1, 4, 9, 16]

//let newArray = arr.map ((element) => {
//console.log(element)
//return undefined
//})

//console.log(newArray)

let dollars = [1, 5, 10, 3];

let newArray = dollars.map((element) => {
  console.log(element);
  return element * 100;
});

console.log(newArray)

let pesos = [0, 10, 20]

let newArrayDos = pesos.map(element => element * 100)

console.log(newArrayDos)

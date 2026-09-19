// DRY - Don't repeat yourself

function sortHighToLow(numbers) {
  return numbers.sort((a, b) => {
    console.log(b.price, a.price)
    return b.price - a.price});
}

console.log(
  sortHighToLow([
    { id: 5, price: 50 },
    { id: 5, price: 400 },
    { id: 5, price: 10 },
  ]),
);

// DRY - Don't repeat yourself

//my attempt
// function showRating(rating) {
//   for (let i = 0; i < rating.length; ++i) {
//     if (rating > 0) {
//       console.log("*");

//     } else if (rating < 1) {
//       console.log(".");
//     }
//   }
// }

//console.log(showRating("3.7"));

//Actual

function showRating(rating) {
  let ratings = "";
  for (let i = 0; i < Math.floor(rating); ++i) {
    ratings = ratings + "*";
    if (i !== Math.floor(rating) - 1) {
      ratings = ratings + " ";
    }
  }
  if (Number.isInteger(rating)) {
    ratings = ratings + " ?";
  }
  return ratings;
}

console.log(showRating(5.5));

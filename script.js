// Funtion Arguments

// let breakfast = 100;
// let lunch = 250;
// let dinner = 150;
// function sumExpense(breakfast, lunch, dinner) {
//   let result = breakfast + lunch + dinner;
//   console.log(`Your Total Expense is : ${result}`);
// }
// sumExpense(100, 250, 150);

//--------------------------------------------------------

// function sumExpense(breakfast, lunch, dinner) {
//   return breakfast + lunch + dinner;
// }
// let result = sumExpense(100, 250, 150);
// console.log(`Your Total Expense is : ${result}`);

//--------------------------------------------------------

// function sumExpense(breakfast, lunch, dinner) {
//   let total;
//   for (let value of arguments) {
//     total = ++value;
//   }

//   console.log(arguments);
//   return breakfast + lunch + dinner;
// }
// let result = sumExpense(100, 250, 150, 200, 140, 190);
// console.log(`Your Total Expense is : ${result}`);

//--------------------------------------------------------

function sumExpense() {
  let total = 0;
  for (let value of arguments) {
    total += value;
  }

  console.log(arguments);
  return total;
}
let result = sumExpense(100, 250, 150, 200, 140, 190);
console.log(`Your Total Expense is : ${result}`);

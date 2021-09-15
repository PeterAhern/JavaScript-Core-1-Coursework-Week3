// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

// Favourite Method

var newNumbers = numbers.map((element) => element * 100);

// Other option

// function multiply100(number) {
//     return number * 100;
// }
// var newNumbers = numbers.map(multiply100);
// console.log(newNumbers)

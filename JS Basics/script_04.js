// Functions
// function myFunction() {
//     console.log("Welcome to Apna college");
//     console.log("We are learning JS");
// }
// myFunction();

// function myFunction(msg, n) {  // parameter -> input
//     console.log(msg*100  );
// }
// myFunction("I love JS", 100); // argument
// function sum(x, y) {
//     console.log(x + y);
// Local variables -> scope
// s = x + y;
// console.log("before return");
// return s;
// console.log("after return");
// }

// let val = sum(1,3);
// console.log(val);

// sum function
// function sum(a, b) {
//     return a + b;
// }

// modern JS -> arrow function
// const arrowSum = (a, b) => {
//     return a + b;
// };

// const x = 5;
// multiplication function
// function mul(a, b) {
//     return a * b;
// }

// arrow function
// let arrowMul = (a, b) => {
//     return a * b;
// };

// const printHello = () => {
//     console.log("Hello");
// };

// Practice question
// 1. Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string.
// function countVowels(str) {
// "ApnaCollege", count = 5
//     let count = 0;
//     for (const char of str){
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     console.log(count);
// }

// 2. Create an arrow function to perform the same task.
// const countVow = (str) => {
//     let count = 0;
//     for(const char of str) {
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count ++;
//         }
//     }
//     console.log(count);
// }

// Callback function
// function abc() {
//     console.log("Hello");
// }
// function myFunc(abc) { // abc is a callback function
//     return abc;
// }

// let arr = [1,2,3,4,5];
// arr.forEach(function printVal(val) { // value st each idx
//     console.log(val);
// })

// arrow function
// let arr = [1,2,3,4,5];
// let cities = ["delhi", "pune", "hyderabad", "mumbai"];
// cities.forEach((el, i, arr) => {
//     console.log(el.toUpperCase(), i, arr);
// });

// Practice question
// For a given array of numbers, print the square of each value using the forEach loop.
// let arr = [1, 2, 3, 4, 5];
// arr.forEach((num, index) => {
//   console.log(num ** 2);
// });

// let cb = function (num, index, ar) {
//   console.log(num, index, ar);
// }; // function expression

// function cbfn(num, index, ar) {
//   console.log(num, index, ar);
// } // function declaration

// arr.forEach(cbfn);

// const myForEach = (myArr = [], cb = () => {}) => {
//   for (let i = 0; i < myArr.length; i++) {
//     cb(myArr[i], i, myArr);
//   }
// };

// myForEach(arr, cb);

// const func = (x, y) => {
//   console.log("I am func");
//   y(x);
// };

// func(
//   () => {
//     console.log("i am x");
//   },
//   (cb) => {
//     console.log("I am y");
//     cb();
//   }
// );

// Map method
// let nums = [55, 67, 98, 21];
// let newArr = nums.map((val) => {
//   return val*val;
// });
// console.log(newArr);

// Filter method
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let evenArr = arr.filter((val) => {
//   return val % 2 === 0;
// });
// console.log(evenArr);

// Reduce method
// let arr = [1, 2, 3, 4];
// const output = arr.reduce((prev, curr) => {
//   return prev + curr;
// });
// console.log(output); // 10
// let arr = [1, 22, 23, 41];
// const output = arr.reduce((prev, curr) => {
//   return prev > curr ? prev : curr;
// });
// console.log(output); // 41

// Practice questions
// 1. We are given array of marks of students. Filter out of the marks of students that scored 90+.
// let arr = [22, 91, 98, 65, 39, 99];
// let marks = arr.filter((val) => {
//   return val > 90;
// });
// console.log(marks);

// 2. Take a number n as input from user. Create an array of numbers from 1 to n. Use the reduce method to calculate sum of all numbers in the array. Use the reduce method to calculate product of all numbers in the array.
let n = prompt("Enter a number: ");
let arr = [];
for (let i = 1; i <= n; i++) {
  arr[i - 1] = i;
}
console.log(arr);
let sum = arr.reduce((prev, curr) => {
  return prev + curr;
});
console.log("Sum = ", sum);
let prod = arr.reduce((prev, curr) => {
  return prev * curr;
});
console.log("Product = ", prod);

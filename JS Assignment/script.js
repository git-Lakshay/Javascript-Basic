// 1. Use conditional statements to check if the number is even or odd.
// let input = Number(prompt("Enter a number: "));
// console.log(typeof input, input)
// if (typeof input === "number" && input >= 0) {
//     if (input % 2 === 0) {
//         console.log(`${input} is even.`);
//     } else {
//         console.log(`${input} is odd.`);
//     }
// } else {
//     console.log("Invalid input");
// }

// 2. Use a loop to print each character of the string on a new line.
// let input = prompt("Enter a String: ");
// for(char of input) {
//     console.log(char);
// }

// 3. Write a function that takes a string as a parameter and returns the string in reverse.
// function reverseStr(str) {
//     let newStr = ""
//     for(let i = str.length - 1; i >= 0; i--) {
//         newStr = newStr + str[i];
//     }
//     return newStr;
// }
// let input = prompt("Enter the string: ");
// console.log(reverseStr(input));

// 4. Find and print the maximum and minimum numbers in the array.
// let input = prompt("Enter the comma separated numbers: ");
// console.log(input)
// if (input) {
//   let arr = input.split(",").map((val) => {
//     return isNaN(Number(val)) ? 0 : Number(val);
//   }).filter(el => el !== 0);

//   const output = arr.reduce((prev, curr) => {
//     return prev > curr ? prev : curr;
//   }, 0);
//   console.log(output);
// }

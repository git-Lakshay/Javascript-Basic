// Arithmetic operators
// let a = 5;
// let b = 2;

// console.log("a + b = ", a + b);
// console.log("a - b = ", a - b);
// console.log("a = ", a, " & b = ", b);
// console.log("a * b = ", a * b);
// console.log("a / b = ", a / b);
// console.log("a % b = ", a % b);
// console.log("a ** b = ", a ** b);

// a--; 
// console.log(a);  // 4
// console.log("a++ = ", a++);  // 4
// console.log("++a = ", ++a);  // 6
// console.log("a-- = ", a--);  // 6
// console.log("--a = ", --a);  // 4


// Assignment operators
// let a = 5;
// let b = 2;
// a += 5;  // 10
// a -= 3;  // 7
// a *= 2;  // 14
// a /= 2;  // 7
// a **= 2;  // 49
// console.log("a = ", a);

// Comparison operators
// let a = 5;
// let b = 2;
// let c = 5;

// console.log("5 == 2", a === b);
// console.log("5 != 2", a !== b);
// console.log("5 < 3", a < b);
// console.log("5 > 3", a > b);
// console.log("5 <= 5", a <= b);

// Logical operators
// let a = 5;
// let b = 7;
// console.log("5 < 7 && a = 6", a < b && a === 6);  // true
// console.log("a = 5 || 5 > 7", a === 5 || a > b);  // true
// console.log("!(5 < 7)", !(a < b));  // false

// Conditional statements
// let age = 16;
// if(age > 18) { 
//     console.log("you can vote");
// }
// if(age < 18) {
//     console.log("you CANNOT vote")
// }

// let mode = "light";
// let color;
// if(mode ==="dark") { 
//     color = "black";
// }
// if (mode === "light") {
//     color = "white";  
// }
// console.log(color);

// let age = 16;
// if (age >= 18) {
//     console.log("you can vote");
// } else{
//     console.log("you CANNOT vote");
// }

// odd or even
// let num = 20;
// if(num%2 === 0) {
//     console.log(num, "is even");
// } else {
//     console.log(num, "is odd");
// }

// let mode = "dark";
// let color;
// if(mode === "dark") {
//     color = "black";
// } else if(mode === "blue") {
//     color = "blue";
// } else if(mode === "pink") {
//     color = "pink";
// } else {
//     color = "white";
// }
// console.log(color);

// if (mode === "dark") {
//     console.log(mode);
//   }

// let age = 25;
// let result = age >= 18 ? "adult" : "not adult"; // simpler, compact if-else
// console.log(result);

// const exp = "apple";
// switch(exp) {
//     case "oranges":
//         console.log("oranges choosen");
//         break;
//     case "papayas":
//         console.log("papayas are choosen");
//         break;
//     case "mangoes":
//         console.log("mangoes are choosen");
//         break;
//     default:
//         console.log("default is choosen");
// }

// alert("Hello!")
// let input = prompt("Hello")
// console.log(input);

// Practice questions
// 1. Get user to input a number using prompt("Enter a number:"). Check if the number is a multiple of 5 or not.
// let num = prompt("Enter a number: ");

// if (num % 5 === 0) {
//     console.log(num, " is a multiple of 5");
// } else {
//     console.log(num, " is not a multiple of 5");
// }

// 2. Write a code which can give grades to students according to their scores:
// 80-100, A
// 70-79,  B
// 60-69,  C
// 50-59,  D
// 0-49,   F

// let input = prompt("Enter the score: ");
// if (input >= 80 && input <= 100) {
//     console.log("A");
// } else if (input >= 70 && input <= 89) {
//     console.log("B");
// } else if (input >= 60 && input <= 69) {
//     console.log("C");
// } else if (input >= 50 && input <= 59) {
//     console.log("D");
// } else {
//     console.log("F");
// }

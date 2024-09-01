// Loops:
// For loop
// for (let count = 1; count <= 10000; count++) {
//     console.log("Apna college");
// }
// console.log("Loop has ended");

// Calculate sum of 1 to 5
// let sum = 0;
// let n = prompt("Enter a number: ");
// for (let i = 1; i <= n; i++) {
//     sum = sum + i;
// }
// console.log("sum = ", sum);
// console.log("Loop has ended");

// Print 1 to 5
// for (var i = 1; i <= 5; i++) {
//     console.log("i = ", i);
// }
// console.log(i);
// console.log("Loop has ended");

// While loop
// let i = 1;
// while(i <= 10) {
//     console.log("i = ", i);
//     i++;
// }
// console.log("Loop has ended");

// Do while loop
// let i = 1;
// do {
//     console.log("i = ", i);
//     i++;
// } while (i <= 50);

// for-of loop
// let str = "JavaScripptt";
// let size = 0;
// for(let i of str) {
//     console.log("val = ", i);
//     size++;
// }
// console.log("string size = ", size); 

// for-in loop
// let student = {
//     name: "Rahul Kumar",
//     age: 20,
//     cgpa: 7.5,
//     isPass: true
// };
// for(let key in student) {
//     console.log("key =", key, " value =", student[key]);
// }

// Practice questions
// 1. Print all even numbers from 0 to 100
// for(let i = 1; i <= 100; i++){
//     if (i%2 !== 0) {
//         console.log(i);
//     }
// }

// 2. Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value. 
// let gameNum = 25;
// let userNum = prompt("Guess the game number: ");
// while (userNum != gameNum) {
//     userNum = prompt("You entered the wrong number, Guess again : ");
// }
// console.log("Congratulations, you entered the right number");

// Strings
// let str = "ApnaCollege";
// let str2 = "Shradha";

// console.log(str[2]);

// Template literals
// let obj = {
//     item: "pen",
//     price: 10
// };
// let output = `the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);
// console.log("the cost of", obj.item, "is", obj.price, "rupees");
// let specialString = `This is a template literal`;
// console.log(typeof specialString);
// let str = "apna\tcollege";
// console.log(str.length);
// let specialString = `This is a template literal ${1 + 2 + 3}`;
// console.log(specialString);

// String methods
// let str = "ApnaCollege";
// let newStr = str.toUpperCase();
// let newStr1 = str.toLowerCase();
// console.log(str);
// console.log(newStr);
// console.log(newStr1);

// let str = "   Apna college  JS   ";
// console.log(str.trim());

// let str = "0123456";
// console.log(str.slice(1, 3));  // 3rd index is non exclusive
// let str1 = "Hello";
// console.log(str1.slice(1, 4));
// console.log(str1.slice(3));

// let str1 = "apna";
// let str2 = "college";
// let result = str1.concat(str2);
// let result = str1 + str2;
// let result = "hello " + 123
// console.log(result);

// let str = "hellololo";
// console.log(str.replace("h", "m"));
// console.log(str.replaceAll("lo", "p"));
// console.log(str.charAt(1));
// str[0] = "S"; // This is not possible
// console.log(str);

// Practice question
// 1. Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length. 
// let fullName = prompt("Enter your full name: ");
// let username = "@" + fullName + fullName.length;
// console.log(username);
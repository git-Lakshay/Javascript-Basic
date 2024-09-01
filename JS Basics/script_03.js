// Arrays
// let marks = [97, 82, 69, 59, 85];
// console.log(marks);
// console.log(marks.length);  // property

// let heroes = ["ironman", "thor", "hulk", "shaktiman", "spiderman", "antman"];
// console.log(heroes);
// console.log(heroes.length);
// console.log(typeof heroes);
// console.log(marks[0]);

// let heroes = ["ironman", "thor", "hulk", "shaktiman", "spiderman", "antman"];
// for loop
// for(let idx = 0; idx < heroes.length; idx++) {
//     console.log(heroes[idx]);
// }

// for-of loop
// for(let hero of heroes) {
//     console.log(hero);
// }
// let cities = ["delhi", "gurugram", "hyderabad", "mumbai"]
// for(let city of cities) {
//     console.log(city.toUpperCase());
// }

// Practice question
// 1. For a given array with marks of students -> [85, 97, 44, 37, 76, 60] Find the average marks of the entire class.
// let arr = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// Method 1
// for(let i = 0; i < arr.length; i++){
//     sum = sum + arr[i];
// }
// Method 2
// for(let ar of arr) {
//     sum += ar;
// }
// let avg = sum/arr.length;
// console.log(`The average of the given marks is ${avg}`);

// 2. For a given array with prices of 5 items -> [250, 645, 300, 900, 50] All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.
// Method 1(for-of loop)
// let items = [250, 645, 300, 900, 50];
// let updatedItems = [];
// let i =0;
// for(let val of items) {
//     let offer = val / 10;
//     updatedItems[i] = val - offer;
//     console.log(`item at ${i} index is ${updatedItems[i]}`);
//     i++;
// }
// console.log(updatedItems);

// Method 2(for loop)
// let items = [250, 645, 300, 900, 50];
// updatedItems = [];
// for(let i = 0; i < items.length; i++) {
//     updatedItems[i] = items[i] - items[i] / 10;
    // console.log(`item at ${i} index is ${updatedItems[i]}`);
// }
// console.log(updatedItems, items);

// Array Methods
// let food = ["tomato", "potato", "noodles", "juice"]
// food.push("rice", "milk");
// let delValue = food.pop();
// console.log("Deleted Value:", delValue);
// console.log(food);
// console.log(food.toString());
// let marks = [82, 97, 56, 88, 68];
// console.log(marks.toString());
// console.log(marks);
// let marvelHeroes = ["thor", "hulk", "ironman", "antman", "doctorStrange"];
// let dcHeroes = ["superman", "batman"];
// let indianHeroes = ["krishh", "shaktiman"];
// let heroes = marvelHeroes.concat(dcHeroes, indianHeroes);
// console.log(heroes);
// marvelHeroes.unshift("antman");
// let heroes = marvelHeroes.shift();
// console.log(heroes);
// console.log(marvelHeroes);
// let heroes = marvelHeroes.slice(2, 4);
// console.log(heroes);
// let marks = [82, 97, 56, 88, 68];
// marks.splice(1, 2, 55, 55);
// marks.splice(1, 0, 52);
// marks.splice(2, 2);
// console.log(marks);

// Practice question
// Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
// a) Remove the first company from the array
// b) Remove Uber & Add Ola in its place
// c) Add amazon at the end
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.shift();
console.log(companies);
companies.splice(1, 1, "Ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);
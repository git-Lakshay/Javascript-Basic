// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));
// console.log(para.setAttribute("class", "newClass"));

// let div = document.querySelector("div");
// div.style.backgroundColor = "green";
// div.style.backgroundColor = "purple";
// div.style.fontSize = "20px";
// div.innerText = "Hello!";
// div.style.visibility = "hidden";

// let p = document.querySelector("p");
// p.style.backgroundColor = "red";

// const generateHexColor = (length = 6) => {
//   let finalColor = ""; // ''
//   const chars = [
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//   ];

//   for (let i = 1; i <= length; i++) {
//     const randomCharIndex = Math.floor(Math.random() * chars.length);
//     finalColor += chars[randomCharIndex];
//   }

//   return `#${finalColor}`;
// };

// const generateRandomNum = (min = 40, max = 80) => {
//     let num = Math.floor((Math.random() * (max - min)) + min);
//     let num1 = 40 + num;
//     return num+"px";
// }

// const createChild = (num = 1) => {
//   const container = document.querySelector("#div1");

//   for (let i = 0; i < num; i++) {
//     let childDiv = document.createElement("div");
//     childDiv.innerText = `${i + 1}`;
//     childDiv.style.backgroundColor = generateHexColor();
//     childDiv.style.height = generateRandomNum();
//     childDiv.style.width = generateRandomNum();
//     container.appendChild(childDiv);
//   }
// };

// createChild(5);

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me!";
// console.log(newBtn);

// let div = document.querySelector("div");
// let p = document.querySelector("p");
// div.append(newBtn);
// div.prepend(newBtn);
// div.before(newBtn);
// div.after(newBtn);
// p.after(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi, I am new!</i>";
document.querySelector("body").prepend(newHeading);
// document.querySelector("body").append(newHeading);
// document.querySelector("body").before(newHeading);
// document.querySelector("body").after(newHeading);

let para = document.querySelector("p");
para.remove();

newHeading.remove();

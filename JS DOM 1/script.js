// console.log("hello");
// alert("Hello");

// console.log(window);
// window.console.log("hello");
// window.alert("Hello world");

// console.dir(window.document);
// console.dir(document.body);
// console.log(document.body);
// console.log(document.head);

// document.body.childNodes[3].innerText = "abcd";

// let heading = document.getElementById("heading");
// console.dir(heading);
// let headings = document.getElementsByClassName("heading-class");
// console.dir(headings);
// console.log(headings);

// let parahs = document.getElementsByTagName("p");
// console.dir(parahs);

// let firstEl = document.querySelector("p"); // 1st element
// console.dir(firstEl);
// let allEl = document.querySelector("p"); // all elements
// console.dir(allEl);

// let firstEl = document.querySelector(".myClass"); // 1st element
// console.dir(firstEl);
// let allEl = document.querySelectorAll(".myClass"); // all elements
// console.dir(allEl);

// let firstEl = document.querySelector("#button"); // 1st element
// console.dir(firstEl);

// console.dir(document.body.firstChild);

// let div = document.querySelector("div");
// console.dir(div);

// let heading = document.querySelector("h1");

/* For practice question */
// 1.
// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + " from Apna College students";  // concatenate

// 2.
let divs = document.querySelectorAll(".box");
// console.log(divs[0]);
for (div of divs) {
    console.log(div);
}
divs[0].innerText = "new unique value 1";
divs[1].innerText = "new unique value 2";
divs[2].innerText = "new unique value 3";
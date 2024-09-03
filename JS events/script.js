// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//   console.log("HANDLER1");
//   let a = 25;
//   a++;
//   console.log(a); // 26
// };

// btn1.onclick = () => {
//   console.log("HANDLER2");
// };

// let div = document.querySelector("div");
// div.onmouseover = (evt) => {
//   console.log(evt);
//   console.log(evt.type);
//   console.log(evt.target);
//   console.log(evt.clientX, evt.clientY);
// };

// btn1.onclick = (evt) => {
//   console.log(evt);
//   console.log(evt.type);
//   console.log(evt.target);
//   console.log(evt.clientX, evt.clientY);
// };

// div.addEventListener("mouseover", () => {
//   console.log("you are inside div");
// });

let btn1 = document.querySelector("#btn1");
// btn1.addEventListener("click", (evt) => {
//   console.log("button1 was clicked");
//   console.log(evt);
//   console.log(evt.type);
// });
// btn1.addEventListener("click", () => {
//   console.log("button1 was clicked - handler2");
// });

btn1.addEventListener("click", (evt) => {
  console.log("button1 was clicked - handler1");
});
btn1.addEventListener("click", (evt) => {
  console.log("button1 was clicked - handler2");
});
let handler3 = (evt) => {
  console.log("button1 was clicked - handler3");
};
btn1.addEventListener("click", handler3);
btn1.addEventListener("click", (evt) => {
  console.log("button1 was clicked - handler4");
});
btn1.removeEventListener("click", handler3);

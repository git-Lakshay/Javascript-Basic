// 1. Create a button element. Give it a text "click me", background color of red & text color of white. Insert the button as the first element inside the body tag.
let btn = document.querySelector("button");
btn.innerText = "click me";
btn.style.color = "white"; // This will appear as inline styling in the elements sec of the inspect
btn.style.backgroundColor = "red";
let body = document.querySelector("body");
document.querySelector("body").prepend(btn);

// 2. Create a <p> tag in html, give it a class & some styling. Now create a new class in CSS and try to append thsi class to the <p> element. Did you notice, how you overwrite the class name when you add a new one? Solve this problem using classList.
let para = document.querySelector("p");

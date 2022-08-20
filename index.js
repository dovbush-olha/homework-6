//task1
const test = document.body.firstElementChild;
let test2 = document.querySelector("#test");
test.textContent = "Last";

//task2
const image = document.querySelector(".image");
image.setAttribute("src", "cat.jpg");
//alert(image.outerHTML);

//task3
const paragraphs = document.querySelectorAll("#text p");
paragraphs.forEach((paragraph, i) => {
  console.log(`Selector text ${i}: ${paragraph.innerHTML}`);
});

//task4
const list = document.querySelector("#list");
const first = list.firstElementChild;
const second = first.nextElementSibling;
const third = second.nextElementSibling;
const fourth = third.nextElementSibling;
const fifth = list.lastElementChild;
//alert(
//  `${first.innerHTML}, ${fifth.innerHTML}, ${second.innerHTML}, ${fourth.innerHTML}, ${third.innerHTML}`
//);

const listItems = document.querySelectorAll("#list li");
//alert(
//  `${listItems[0].innerHTML}, ${listItems[4].innerHTML}, ${listItems[1].innerHTML}, ${listItems[3].innerHTML}, ${listItems[2].innerHTML}`
//);

//task5
document.querySelector("h1").style.backgroundColor = "lightGreen";
document.querySelector("#myDiv p:first-child").style.fontWeight = "bold";
document.querySelector("#myDiv p:nth-child(2)").style.color = "red";
document.querySelector("#myDiv p:nth-child(3)").style.textDecoration =
  "underline";
document.querySelector("#myDiv p:last-child").style.fontStyle = "italic";

document.querySelectorAll("#myList li").forEach((li) => {
  li.style.display = "inline";
  li.style.marginRight = "-5px";
});

document.querySelector("#invisible").style.display = "none";

//task6
let value1 = prompt("Enter a value1");
document.querySelector("#input1").value = value1;
let value2 = prompt("Enter a value2");
document.querySelector("#input2").value = value2;
document.querySelector("#input1").value = value2;
document.querySelector("#input2").value = value1;

//task7
let main = document.createElement("main");
main.classList.className = "mainClass check item";
let myDiv = document.createElement("div");
myDiv.id = "myDiv";
let p = document.createElement("p");
p.textContent = "First paragraph";
myDiv.appendChild(p);
main.appendChild(myDiv);
document.body.append(main);

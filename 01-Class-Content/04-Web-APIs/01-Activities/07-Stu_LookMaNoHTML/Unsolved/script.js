// Create your HTML Page via DOM Methods here!
var header = document.createElement("h1");
header.textContent = "My Header";
document.body.appendChild(header);
header.setAttribute("style", "text-align: center");

var img = document.createElement("img");
document.body.appendChild(img);
img.setAttribute("src", "https://placeholder.pics/svg/300");
document.body.appendChild(img);
img.parentElement.setAttribute("style", "text-align:center");

var list = document.createElement("ul");
var listItem1 = document.createElement("li");
var listItem2 = document.createElement("li");
var listItem3 = document.createElement("li");
document.body.appendChild(list);
list.textContent = "My List";

list.appendChild(listItem1);
listItem1.textContent = "item1";
list.appendChild(listItem2);
listItem2.textContent = "item2";
list.appendChild(listItem3);
listItem3.textContent = "item3";
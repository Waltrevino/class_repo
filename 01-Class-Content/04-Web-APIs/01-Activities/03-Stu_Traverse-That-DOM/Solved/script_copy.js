var mainDiv = document.getElementById("main");
var artDiv = document.getElementById("articles");

let children = mainDiv.children;
// let nodes = mainDiv.childNodes;
// console.log(children.length);
// [].forEach.call(children, (child) => {
//   console.log(child);
// })
// console.log(nodes.length);
// nodes.forEach((node) => {
//   console.log(node);
// })


// console.log('MAIN CHILDREN', mainDiv.children);
// console.log('ART CHILDREN', artDiv.children);

console.log('MAIN NODES', mainDiv.childNodes);
console.log('ART NODES', artDiv.childNodes);

mainDiv.childNodes[4].style.textDecoration = "underline";
// mainDiv.lastElementChild.style.fontSize = "50px";
// mainDiv.firstElementChild.style.color = "orange";
// mainDiv.lastElementChild.parentElement.style.fontSize = "40px";

// artDiv.children[0].style.fontSize = "50px";

// artDiv.children[0].lastElementChild.style.color = "blue";
// artDiv.previousElementSibling.style.background = "black";

// console.log(mainDiv.childNodes);
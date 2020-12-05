var aTags = document.querySelectorAll("a");
var imgTags = document.querySelectorAll("img")
var hONETag = document.querySelectorAll("h1");
var mainDiv = document.querySelector("#main");
var sites = ["https://news.ycombinator.com/", "https://twitter.com", "https://instagram.com", "https://google.com", "https://reddit.com/r/webdev"];

for (var i = 0; i < imgTags.length; i++) {
  imgTags[i].setAttribute("src", "./images/image_1.jpg");
  imgTags[i].setAttribute("alt", "image ");
}

for (var i = 0; i < aTags.length; i++) {
  //   aTags[i].setAttribute("href", "http://www.fifa.com")
  aTags[i].previousElementSibling.textContent = "Site " + (i + 1);
  aTags[i].setAttribute("href", sites[Math.floor(Math.random() * sites.length)]);
}
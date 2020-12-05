const dogImage = document.querySelector("#dog-photo");
const btnPrevious = document.querySelector(".prev");
const btnNext = document.querySelector(".next");
const filePath = "./imgs/";
var index = 0;

const images = ["dog1.jpg", "dog2.jpg", "dog3.jpg", "dog4.jpg", "dog5.jpg", "dog6.jpg", "dog7.jpg", "dog8.jpg"];

var currentImage;

function navigatePic(upDown) {
  index = index + upDown;
  if (index < 0) {
    index = images.length - 1;
  }

  if (index >= images.length) {
    index = 0;
  }

  dogImage.setAttribute("src", filePath + images[index]);

}



btnNext.addEventListener("click", function(event) {
  event.stopPropagation
    //   console.log(images.length);
    //   i++;
    //   if (i < images.length) {
    //     dogImage.setAttribute("src", filePath + images[i]);
    //   }
  navigatePic(1);
})

btnPrevious.addEventListener("click", function(event) {
  event.stopPropagation();
  //   i--;
  //   if (i > -1) {
  //     dogImage.setAttribute("src", filePath + images[i]);
  //   }
  navigatePic(-1);
})

const btnTest = document.querySelector(".btnTest");
btnTest.addEventListener("click", function() {
  console.log(index);
})
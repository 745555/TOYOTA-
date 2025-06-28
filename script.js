let images = ["1.jpg", "2.jpg", "3.jpg"];
let index = 0;
let slider = document.getElementById("slider-image");

setInterval(() => {
  index = (index + 1) % images.length;
  slider.src = images[index];
}, 3000); // كل 3 ثواني تتغير الصورة

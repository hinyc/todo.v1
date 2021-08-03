const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
bgImage.classList.add("bg");
document.body.appendChild(bgImage);

const img = document.querySelector("img");

function newBg() {
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  img.src = `img/${chosenImage}`;
}

setInterval(newBg, 10000);

let list = document.querySelector("ul");
let menu = document.querySelector(".menu");

menu.onclick = () => {
  list.classList.toggle("d-none");
  list.classList.toggle("open-list");
};
/*/////////////// */
const showImage = (idImage) => {
  console.log("hey");
  let currentImage = document.querySelector(".current");
  if (currentImage.id == idImage) {
    let currentBtn = document.getElementById(`btn${currentImage.id}`);
    currentBtn.style.background = "#69b9ff";
  } else {
    let btn = document.getElementById(`btn${idImage}`);
    let image = document.getElementById(idImage);
    let currentBtn = document.getElementById(`btn${currentImage.id}`);
    currentBtn.style.background = "#92a0ad";
    btn.style.background = "#69b9ff";
    currentImage.classList.add("d-none");
    currentImage.classList.remove("current");
    image.classList.add("current");
    image.classList.remove("d-none");
  }
};

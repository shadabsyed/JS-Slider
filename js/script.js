const slideImage = document.querySelectorAll(".slide-img");
const imgs = document.querySelectorAll(".slide-img img");
const slideContainer = document.querySelector(".slide-img-cont");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slideNavDots = document.querySelector(".slide-nav-dots");
let numberOfImages = slideImage.length;
let slideWidth = slideImage[0].clientWidth;
let currentSlide = 0;

// set up the slider

function init() {
  slideImage.forEach((img, i) => {
    img.style.left = i * 100 + "%";
  });
  slideImage[0].classList.add("active");
  imgs[0].style.display = "block";
}
init();

document
  .querySelectorAll(".slide-nav-dots .single-dot")
  .forEach(function (dot, number) {
    dot.addEventListener("click", () => {
      goToSlide(number);
    });
  });
slideNavDots.children[0].classList.add("active");

// next btn

nextBtn.addEventListener("click", () => {
  if (currentSlide >= numberOfImages - 1) {
    goToSlide(0);
    return;
  }
  currentSlide++;
  goToSlide(currentSlide);
});

prevBtn.addEventListener("click", () => {
  if (currentSlide <= 0) {
    goToSlide(numberOfImages - 1);
    return;
  }
  currentSlide--;
  goToSlide(currentSlide);
});

function goToSlide(slideNumber) {
  slideContainer.style.transform =
    "translateX(-" + slideWidth * slideNumber + "px)";
  currentSlide = slideNumber;
  setActiveClass();
}

function setActiveClass() {
  let currentActive = document.querySelector(".slide-img.active");
  let currentActiveIMG = document.querySelector(".slide-img.active img");

  currentActive.classList.remove("active");
  slideImage[currentSlide].classList.add("active");

  currentActiveIMG.style.display = "none";

  imgs[currentSlide].style.display = "block";

  let currentDot = document.querySelector(".single-dot.active");
  currentDot.classList.remove("active");
  slideNavDots.children[currentSlide].classList.add("active");
}

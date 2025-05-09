const accordionItems = document.querySelectorAll(".accordion .item");

accordionItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Close all items first
    accordionItems.forEach((el) => {
      if (el !== item) el.classList.remove("open");
    });

    // Toggle current item
    item.classList.toggle("open");
  });
});

const imgs = document.querySelectorAll(".testimonial-img");
const testimonials = document.querySelectorAll(".testimonial");
const leftBtn = document.querySelector(".btn--left");
const rightBtn = document.querySelector(".btn--right");
const dotsContainer = document.querySelector(".dots");

let currentSlide = 0;
const maxSlide = testimonials.length;

// Create dots
// function createDots() {
//   testimonials.forEach((_, i) => {
//     const dot = document.createElement("button");
//     dot.classList.add("dot");
//     dot.dataset.slide = i;
//     dotsContainer.appendChild(dot);
//   });
// }

// Activate dot
function activateDot(slide) {
  document.querySelectorAll(".dot").forEach((dot) => {
    dot.classList.remove("dot-fill");
  });
  const activeDot = document.querySelector(`.dot[data-slide="${slide}"]`);
  if (activeDot) activeDot.classList.add("dot-fill");
}

// Go to specific slide
function goToSlide(slide) {
  imgs.forEach((img, i) => {
    img.classList.toggle("hidden", i !== slide);
  });
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.toggle("hidden", i !== slide);
  });
}

// Next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % maxSlide;
  goToSlide(currentSlide);
  activateDot(currentSlide);
}

// Previous slide
function prevSlide() {
  currentSlide = (currentSlide - 1 + maxSlide) % maxSlide;
  goToSlide(currentSlide);
  activateDot(currentSlide);
}

// Event Listeners
rightBtn.addEventListener("click", nextSlide);
leftBtn.addEventListener("click", prevSlide);
dotsContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dot")) {
    const slide = +e.target.dataset.slide;
    currentSlide = slide;
    goToSlide(slide);
    activateDot(slide);
  }
});

// Initialize
function init() {
  // createDots();
  goToSlide(0);
  activateDot(0);
}

init();

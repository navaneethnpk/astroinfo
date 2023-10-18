const buttons = document.querySelectorAll("[data-btn]");
const slide = document.querySelector("[data-carousel] [data-slides]");
const slides = slide.children;
let currentIndex = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.btn === "next" ? 1 : -1;
    const activeSlide = slide.querySelector("[data-active]");
    currentIndex = [...slides].indexOf(activeSlide);
    let newIndex = currentIndex + offset;

    if (newIndex < 0) {
      newIndex = 0; // Keep showing the first slide
    } else if (newIndex >= slides.length) {
      newIndex = slides.length - 1; // Prevent going beyond the last slide
    }

    activeSlide.removeAttribute('data-active');
    slides[newIndex].setAttribute('data-active', '');
  });
});

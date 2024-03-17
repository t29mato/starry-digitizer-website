const ACTIVE_ELEMENT_CLASS_NAME = "is-active";

const demoSlides = [
  document.getElementById("demo-slide-0"),
  document.getElementById("demo-slide-1"),
  document.getElementById("demo-slide-2"),
  document.getElementById("demo-slide-3"),
];

let currentSlideId = 0;
const switchDemoSlidesByInterval = () => {
  setInterval(() => {
    const nextSlideId =
      currentSlideId < demoSlides.length - 1 ? currentSlideId + 1 : 0;

    demoSlides[currentSlideId].classList.remove(ACTIVE_ELEMENT_CLASS_NAME);
    demoSlides[nextSlideId].classList.add(ACTIVE_ELEMENT_CLASS_NAME);

    currentSlideId = nextSlideId;
  }, 2000);
};

window.onload = () => {
  switchDemoSlidesByInterval();
};

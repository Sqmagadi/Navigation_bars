const navbar = document.querySelector('.navbar');
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');

const scrollStep = 50; // Change this value to adjust the scroll amount

function handleScrollRight() {
  navbar.scrollBy({
    left: scrollStep,
    behavior: 'smooth'
  });
  updateButtonVisibility();
}

function handleScrollLeft() {
  navbar.scrollBy({
    left: -scrollStep,
    behavior: 'smooth'
  });
  updateButtonVisibility();
}

function updateButtonVisibility() {
  leftButton.style.visibility = navbar.scrollLeft === 0 ? 'hidden' : 'visible';
  rightButton.style.visibility =
    navbar.scrollLeft + navbar.clientWidth >= navbar.scrollWidth ? 'hidden' : 'visible';
}

leftButton.addEventListener('click', handleScrollLeft);
rightButton.addEventListener('click', handleScrollRight);

navbar.addEventListener('scroll', updateButtonVisibility);

window.addEventListener('resize', () => {
  updateButtonVisibility();
});
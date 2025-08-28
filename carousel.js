const images = document.querySelector('.carousel-images');
const leftBtn = document.querySelector('.arrow.left');
const rightBtn = document.querySelector('.arrow.right');
const carousel = document.querySelector('.carousel');
const totalImages = document.querySelectorAll('.carousel-images img').length;
let index = 0;
let autoPlay;

function updateCarousel() {
  images.style.transform = `translateX(${-index * 100}%)`;
}

function nextImage() {
  index = (index + 1) % totalImages;
  updateCarousel();
}

function prevImage() {
  index = (index - 1 + totalImages) % totalImages;
  updateCarousel();
}

rightBtn.addEventListener('click', nextImage);
leftBtn.addEventListener('click', prevImage);

// --- Autoplay handling ---
function startAutoPlay() {
  autoPlay = setInterval(nextImage, 3000);
}

function stopAutoPlay() {
  clearInterval(autoPlay);
}

startAutoPlay();

// Pause on hover
carousel.addEventListener('mouseenter', stopAutoPlay);
carousel.addEventListener('mouseleave', startAutoPlay);

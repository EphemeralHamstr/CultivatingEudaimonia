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
  autoPlay = setInterval(nextImage, 5000);
}

function stopAutoPlay() {
  clearInterval(autoPlay);
}

startAutoPlay();

// Pause on hover
carousel.addEventListener('mouseenter', stopAutoPlay);
carousel.addEventListener('mouseleave', startAutoPlay);

// --- Lightbox click-to-enlarge feature ---
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');

// Add click event to each image
document.querySelectorAll('.carousel-images img').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

// ✅ clicking the enlarged image switches to the next one
lightboxImg.addEventListener('click', (e) => {
  e.stopPropagation(); // prevent closing the lightbox
  nextImage();
  lightboxImg.src = imageElements[index].src;
});

// Close when clicking the X or outside the image
closeBtn.addEventListener('click', () => lightbox.style.display = 'none');
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) lightbox.style.display = 'none';
});

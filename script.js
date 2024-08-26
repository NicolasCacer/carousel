// script.js

let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

function updateCarousel() {
    images.forEach((img, index) => {
        img.classList.remove('active');
        if (index === currentIndex) {
            img.classList.add('active');
        }
    });
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === images.length - 1;
}

function nextImage() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateCarousel();
    }
}

function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
}

// Initialize carousel
updateCarousel();

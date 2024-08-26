const images = [
    'images/image_1.jpg',
    'images/image_2.jpeg',
    'images/image_3.jpeg'
];

let currentIndex = 0;

// Get elements
const carouselImages = document.querySelector('.carousel-images');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Function to update the carousel display
function updateCarousel() {
    carouselImages.innerHTML = '';
    const imgElement = document.createElement('img');
    imgElement.src = images[currentIndex];
    carouselImages.appendChild(imgElement);
    
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === images.length - 1;
}

// Event listeners for buttons
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

// Initial load
updateCarousel();

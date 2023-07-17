let currentIndex = 0;
const carousel = document.querySelector('.carousel-images');

function changeSlide(direction) {
    const carouselWidth = carousel.clientWidth;
    const numImages = carousel.childElementCount;

    currentIndex = (currentIndex + direction + numImages) % numImages;

    const translateXValue = -currentIndex * carouselWidth;
    carousel.style.transform = `translateX(${translateXValue}px)`;
}

window.addEventListener('resize', () => {
    changeSlide(0); // Reset carousel position on window resize
});

document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.service-item');
    let index = 0;

    function updateSlide() {
        const slideWidth = slides[0].offsetWidth + 20; // Adjust for margin
        sliderWrapper.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    function moveToNextSlide() {
        index = (index + 1) % slides.length;
        updateSlide();
    }

    function moveToPrevSlide() {
        index = (index - 1 + slides.length) % slides.length;
        updateSlide();
    }

    prevButton.addEventListener('click', moveToPrevSlide);
    nextButton.addEventListener('click', moveToNextSlide);

    // Initialize the first slide
    updateSlide();

    
});

let currentIndex = 0;

function changeSlide(direction) {
    const slider = document.querySelector('.slider');
    const testimonials = document.querySelectorAll('.testimonial-1');
    const sliderWidth = testimonials[0].offsetWidth;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = testimonials.length - 1;
    } else if (currentIndex >= testimonials.length) {
        currentIndex = 0;
    }

    const translateValue = -currentIndex * sliderWidth;
    slider.style.transform = `translateX(${translateValue}px)`;
}
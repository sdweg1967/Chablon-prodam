//Animate elements on scroll
const fadeElements = document.querySelectorAll('.fadeIn');

function checkScroll() {
    fadeElements.forEach(element => {
        // Get the element's bounding rectangle relative to viewport
        let rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            element.classList.add('animated');
        } else {
            element.classList.remove('animated');
        }
    });
}

// Listen for scroll event
window.addEventListener('scroll', checkScroll);

// Initial call to show visible elements immediately
checkScroll();

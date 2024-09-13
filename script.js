document.addEventListener('DOMContentLoaded', () => {
    // Select the intro section
    const introSection = document.querySelector('#intro');

    // Apply styles directly using JavaScript
    introSection.style.backgroundColor = '#333'; // Dark Gray
    introSection.style.color = '#fff'; // White text

    // Style the cover image
    const coverImage = document.querySelector('.cover-image');
    coverImage.style.backgroundColor = '#333'; // Dark Gray (if background image is not loaded)
    coverImage.style.backgroundSize = 'cover';
    coverImage.style.backgroundPosition = 'center';
    coverImage.style.backgroundRepeat = 'no-repeat';

    // Style the content within the intro section
    const content = document.querySelector('.content');
    content.style.textAlign = 'center';
    content.style.color = '#fff'; // White text

    // Optionally, you can add more styles or modify content dynamically
    const heading = content.querySelector('h1');
    heading.style.fontSize = '5.5em';
    heading.style.margin = '20px 0';

    const paragraph = content.querySelector('p');
    paragraph.style.fontSize = '1.2em';
    paragraph.style.color = '#ddd'; // Light Gray
    paragraph.style.marginBottom = '20px';
});

// Fade-In Effect on Scroll
document.addEventListener('DOMContentLoaded', function() {
    const features = document.querySelectorAll('.feature');

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const fadeInOnScroll = () => {
        features.forEach(feature => {
            if (isInViewport(feature)) {
                feature.classList.add('fade-in');
            }
        });
    };

    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll(); // Initial check in case elements are already in viewport
});

// Image Zoom Effect
document.addEventListener('DOMContentLoaded', function() {
    const featureImages = document.querySelectorAll('.feature-image');

    featureImages.forEach(image => {
        image.addEventListener('mouseenter', () => {
            image.classList.add('zoom');
        });

        image.addEventListener('mouseleave', () => {
            image.classList.remove('zoom');
        });
    });
});



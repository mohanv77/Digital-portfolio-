// Generate random stars for the galaxy background
const starCount = 150; // number of stars
const starsContainer = document.getElementById('stars');

for (let i = 0; i < starCount; i++) {
    // Create a star element
    let star = document.createElement('div');
    star.className = 'star';

    // Random size between 1px and 3px
    let size = Math.random() * 2 + 1;
    star.style.width = size + 'px';
    star.style.height = size + 'px';

    // Random position
    star.style.top = Math.random() * 100 + '%';
    star.style.left = Math.random() * 100 + '%';

    // Random animation duration for twinkle effect
    star.style.animationDuration = (Math.random() * 3 + 2) + 's';

    // Add the star to the container
    starsContainer.appendChild(star);
}

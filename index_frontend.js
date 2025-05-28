const words = ['Web Developer', 'Software Developer', 'Web Designer', 'Software Architect'];
const textElement = document.querySelector('.typing-text span');
let wordIndex = 0; // Which word we're on (starts at first word)
let charIndex = 0; // Which caracter we're on in current word 
let isDeleting = false; // Are we typing or backspacing?
let typeSpeed = 150; // Millisecons between actions 

function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50; // Faster delete
    } else {
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 150;
    }

    // Transition logic
    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 1000; // Pause at end
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500; // Pause before next word
    }

    setTimeout(type, typeSpeed);
}

type();

// TOGGLE MOBILE MENU

// Toggle mobile menu
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
});

// VIDEO SECTION

const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');
const video4 = document.getElementById('projectVideo4');
const video5 = document.getElementById('projectVideo5');
const video6 = document.getElementById('projectVideo6');

const videoList = [video1, video2, video3, video4, video5, video6];

videoList.forEach(function(video) {
    video.addEventListener('mouseover', function() {
        video.play()
    })
    video.addEventListener('mouseout', function() {
        video.pause()
    })
})
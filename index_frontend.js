const words = ['Web Development', 'Software Development', 'Web Design', 'Software Architecture'];
const textElement = document.querySelector('.typing-text span');
let wordIndex = 0; // Which word is on 
let charIndex = 0; // Which character is on in current word 
let isDeleting = false; 
let typeSpeed = 150; // Milliseconds between actions 

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

// Detect if device supports hover (desktop-like)
const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

videoList.forEach(function(video) {
    if (!video) return; // Safety check

    if (canHover) {
        // Desktop: play on hover
        video.addEventListener('mouseenter', () => video.play());
        video.addEventListener('mouseleave', () => video.pause());
    } else {
        // Mobile/tablet: tap to toggle play/pause
        video.addEventListener('click', () => {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });
    }
});
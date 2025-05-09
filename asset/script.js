function myMenuFunction() {
    var navMenu = document.getElementById("myNavMenu");
    if (navMenu.className === "nav-menu") {
        navMenu.className += " responsive";
    } else {
        navMenu.className = "nav-menu";
    }
}

var typed = new Typed('.typedText', {
    strings: ["Newbie In Programming"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});

ScrollReveal().reveal('.featured-text', { delay: 200 });
ScrollReveal().reveal('.featured-image', { delay: 400 });
ScrollReveal().reveal('.project-box', { interval: 200 });

// Form submission handler
document.addEventListener('DOMContentLoaded', () => {
    const formButton = document.querySelector('.form-button .btn');
    const nameInput = document.querySelector('.input-field[placeholder="Name"]');
    const emailInput = document.querySelector('.input-field[placeholder="Email"]');
    const messageInput = document.querySelector('textarea[placeholder="Message"]');

    formButton.addEventListener('send', (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        // Validate inputs
        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Simulate form submission
        alert(`Thank you, ${name}! Your message has been sent successfully.`);
        
        // Clear the form fields
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    });
});

// Email validation function
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
let lastScrollY = window.scrollY;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // Scrolling down
        nav.classList.add('nav-hidden');
    } else {
        // Scrolling up
        nav.classList.remove('nav-hidden');
    }
    lastScrollY = window.scrollY;
});

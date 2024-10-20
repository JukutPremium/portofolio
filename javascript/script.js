// Navbar (Mobile)
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
    });
});

// to-top button
const toTopButton = document.getElementById("to-top");
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        toTopButton.classList.remove("hidden");
    } else {
        toTopButton.classList.add("hidden");
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');

    // Animation
    anime({
        targets: navbar,
        translateY: ['-100%', '0%'],
        duration: 2500,
        easing: 'easeOutExpo'
    });

    // Mobile Menu
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
    });
});
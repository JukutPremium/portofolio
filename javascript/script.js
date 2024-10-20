const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const dropdownBtn = document.getElementById('dropdown-btn');
const dropdownMenu = document.getElementById('dropdown-menu');

// Toggle mobile menu visibility
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Toggle dropdown menu visibility
dropdownBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
});

// Hide dropdown menu when a link is clicked
dropdownMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        dropdownMenu.classList.add('hidden');
    });
});

// Hide mobile menu when a link is clicked
document.querySelectorAll('#menu-items a, #mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});
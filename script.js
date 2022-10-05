// SELECTORS
const menu = document.querySelector('header .inner #menu-bar');
const navbar = document.querySelector('header .inner nav');

// EVENT LISTENERS
menu.addEventListener('click', openToggleFunc);


// FUNCTIONS
function openToggleFunc() {
    navbar.classList.toggle('active');
}




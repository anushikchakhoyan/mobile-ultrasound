(() => {
    const menu = document.querySelector('header .inner #menu-bar');
    const navbar = document.querySelector('header .inner nav');

    menu.addEventListener('click', openToggleFunc);

    function openToggleFunc() {
        navbar.classList.toggle('active');
    }

    const navLinks = document.querySelectorAll('.navbar li');
    if (navLinks.length) {
        navLinks.forEach((link) => {
            link.addEventListener('click', (e) => {
                navLinks.forEach((link) => {
                    link.classList.remove('active');
                });
                link.classList.add('active');
            });
        });
    }
})();

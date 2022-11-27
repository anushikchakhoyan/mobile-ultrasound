(() => {
    const menu = document.querySelector('header .inner #menu-bar');
    const navbar = document.querySelector('header .inner nav');
    const navLinks = document.querySelectorAll('.navbar li');

    menu.addEventListener('click', openToggleFunc);

    function openToggleFunc() {
        navbar.classList.toggle('active');
    }

    if (navLinks.length) {
        navLinks.forEach((link) => {
            link.addEventListener('click', (_) => {
                navLinks.forEach((link) => {
                    link.classList.remove('active');
                });
                link.classList.add('active');
            });
        });
    }

    const date = new Date();
    document.getElementById('currentYear').innerHTML = date.getFullYear();
})();

function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
}

document.addEventListener('click', function(event) {
    const nav = document.querySelector('nav');
    const menuIcon = document.querySelector('.menu-icon');
    if (!nav.contains(event.target) && !menuIcon.contains(event.target)) {
        nav.style.display = 'none';
    }
});
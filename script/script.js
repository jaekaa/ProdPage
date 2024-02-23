document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('#nav-bar .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
        // Remove 'active' class from all nav links
        navLinks.forEach(navLink => navLink.classList.remove('active'));

        // Add 'active' class to the clicked link
        link.classList.add('active');
        });
    });
});

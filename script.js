document.addEventListener('DOMContentLoaded', (event) => {
    const checkbox = document.querySelector('.navigation__checkbox');
    const navLinks = document.querySelectorAll('.navigation__link');
    const navBackground = document.querySelector('.navigation__background');
    const nav = document.querySelector('.navigation__nav');

    // Function to close the menu
    const closeMenu = () => {
        checkbox.checked = false;
    };

    // Add click event listeners to all navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                closeMenu();

                // Smooth scroll to the target section
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navigation') && checkbox.checked) {
            closeMenu();
        }
    });

    // Prevent the click on the menu background from closing the menu
    navBackground.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});
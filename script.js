document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Change icon if needed (handled by lucide usually, or simple text toggle)
        });
    }

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Initialize Lucide Icons
    lucide.createIcons();

    // Simple Form Validation/Simulation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;

            btn.innerHTML = 'Sending...';
            btn.disabled = true;

            setTimeout(() => {
                alert('Message sent successfully! We will contact you shortly.');
                contactForm.reset();
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 1500);
        });
    }
});

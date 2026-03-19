document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');
    const links = navLinks.querySelectorAll('a');

    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileToggle.classList.toggle('active');
    });

    // Close mobile nav when clicking a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileToggle.classList.remove('active');
        });
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // WhatsApp Order Link Configuration
    const phoneNumber = "919876543210"; // Default, update as needed
    const prefilledMessage = encodeURIComponent("Hello Thottara Kitchen! I would like to place an order/make an inquiry.");

    const waUrl = `https://wa.me/${phoneNumber}?text=${prefilledMessage}`;

    const waButton = document.getElementById('wa-order-btn');
    const floatingWa = document.getElementById('floating-wa');

    if (waButton) waButton.href = waUrl;
    if (floatingWa) floatingWa.href = waUrl;

    // Intersection Observer for scroll animations (if we add more .reveal classes later)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Grab all cards and apply a subtle fade in
    document.querySelectorAll('.feature-card, .gallery-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});

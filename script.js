// Minimal JS for smooth reveal on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Select elements to animate
const cards = document.querySelectorAll('.glass-card');
const manifesto = document.querySelector('.manifesto h2');

// Initial set up for scroll animation elements
[...cards, manifesto].forEach(el => {
    if(el) {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)";
        observer.observe(el);
    }
});

// Dynamic Ticker Duplication
const ticker = document.querySelector('.ticker-content');
// Duplicate content to ensure seamless loop
ticker.innerHTML += ticker.innerHTML;
document.addEventListener('DOMContentLoaded', () => {
    const joinUsBtn = document.getElementById('join-us-btn');

    joinUsBtn.addEventListener('click', () => {
        alert('Thank you for your interest! Please contact us for membership details.');
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
});
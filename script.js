// script.js

// Añadir un evento de scroll para hacer que las secciones aparezcan gradualmente
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 100) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }
    });
});

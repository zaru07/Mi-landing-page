document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los enlaces que tienen un hash (#) en su href
    const navLinks = document.querySelectorAll('a[href^="#"]');

    // Itera sobre cada enlace
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Previene el comportamiento de salto por defecto
            event.preventDefault();

            // Obtiene el ID del destino (ej. '#contacto')
            const targetId = link.getAttribute('href');

            // Encuentra el elemento de destino
            const targetSection = document.querySelector(targetId);

            // Si el elemento existe, desplázate a él suavemente
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
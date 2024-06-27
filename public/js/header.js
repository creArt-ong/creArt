// Función para alternar el estilo display del menú principal
function toggleMenu() {
    const navUl = document.querySelector('nav ul');

    // Verificar el estado actual del menú
    const isMenuVisible = navUl.style.display === 'flex';

    // Cambiar el estilo display del menú
    if (isMenuVisible) {
        navUl.style.display = 'none'; // Ocultar el menú
    } else {
        navUl.style.display = 'flex'; // Mostrar el menú cambiando el display a flex
    }
}
// Evento para cerrar el menú al hacer clic fuera de él y en dispositivos táctiles
document.addEventListener('click', function(event) {
    const nav = document.querySelector('nav');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (!nav.contains(event.target) && nav.classList.contains('show')) {
        nav.classList.remove('show');
    }
});

// Eventos para abrir y cerrar los menús desplegables en dispositivos móviles y de escritorio
const dropdownItems = document.querySelectorAll('.nav-item.dropdown');

dropdownItems.forEach(item => {
    // Evento para abrir el menú desplegable al hacer clic o toque
    item.addEventListener('click', function(event) {
        if (window.innerWidth <= 768) { // Dispositivo móvil
            event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
            item.classList.toggle('open'); // Alternar la clase 'open' en el elemento del menú desplegable
        }
    });

    // Evento para mostrar el menú desplegable al hacer hover en dispositivos de escritorio
    item.addEventListener('mouseenter', function(event) {
        if (window.innerWidth > 768) { // Dispositivo de escritorio
            item.classList.add('open'); // Agregar la clase 'open' para mostrar el menú desplegable
        }
    });

    // Evento para ocultar el menú desplegable al dejar de hacer hover en dispositivos de escritorio
    item.addEventListener('mouseleave', function(event) {
        if (window.innerWidth > 768) { // Dispositivo de escritorio
            item.classList.remove('open'); // Quitar la clase 'open' para ocultar el menú desplegable
        }
    });

    // Evento para cerrar el menú desplegable al hacer clic en un enlace en dispositivos móviles
    item.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(event) {
            if (window.innerWidth <= 768) { // Dispositivo móvil
                item.classList.remove('open'); // Cerrar el menú desplegable al hacer clic en un enlace
            }
        });
    });
});
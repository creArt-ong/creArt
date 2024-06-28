// Función para alternar el estilo display del menú principal
function toggleMenu() {
    const navUl = document.querySelector('nav ul');
    const isMenuVisible = navUl.style.display === 'flex';
    navUl.style.display = isMenuVisible ? 'none' : 'flex';
}

// Evento para cerrar el menú al hacer clic fuera de él y en dispositivos táctiles
document.addEventListener('click', function(event) {
    const nav = document.querySelector('nav');
    const menuToggle = document.querySelector('.menu-toggle');
    if (!nav.contains(event.target) && nav.classList.contains('show')) {
        nav.classList.remove('show');
    }
});

// EVITO LA PROPAGACIÓN DEL EVENTO AL CLICK EN LOS ENLACES DEL MENU
document.addEventListener("DOMContentLoaded", function(){
    var listItems = document.querySelectorAll(".dropdown-menu li");
    listItems.forEach(function(item){
      item.addEventListener("click", function(event){
        event.stopPropagation(); // Detiene la propagación del evento al elemento padre
      });
    });
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
    item.addEventListener('mouseenter', function() {
        if (window.innerWidth > 768) { // Dispositivo de escritorio
            item.classList.add('open'); // Agregar la clase 'open' para mostrar el menú desplegable
        }
    });

    // Evento para ocultar el menú desplegable al dejar de hacer hover en dispositivos de escritorio
    item.addEventListener('mouseleave', function() {
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
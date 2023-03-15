const btn = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const icono = document.querySelector('.icono');

console.log(icono);

btn.addEventListener('click', () => {
    links.classList.toggle('show-links');
    cambiarIcono();
    
    
});


let estado = 0;
function cambiarIcono() {
    const cerrar = 'images/icon-close.svg';
    const abrir = 'images/icon-hamburger.svg';
    if (estado === 1) {
        icono.src = abrir;
        estado = 0;
    } else {
        icono.src = cerrar;
        estado = 1;
    }
}

//BOTON HACIA ARRIBA

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){
    let currentScroll = document.documentElement.scroll||document.body.scrollTop;
    if(currentScroll>0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo(0, currentScroll-(currentScroll/5));
        buttonUp.style.transform = "scale(0)";
    }

}

buttonUp=document.getElementById("button-up");

window.onscroll = function(){
    let scroll = document.documentElement.scrollTop;
    if(scroll > 200){
        buttonUp.style.transform = "scale(1)";
    }else if(scroll < 200){
        buttonUp.style.transform = "scale(0)";
    }
}


// CARRUSEL 2

window.onload = function () {
    // Variables
    const IMAGENES = [
        'img/peli_14.jpg',
        'img/peli_15.jpg',
        'img/peli_16.jpg',
        'img/peli_19.jpg'
    ];
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen');
    let $botonPlay = document.querySelector('#play');
    let $botonStop = document.querySelector('#stop');
    let intervalo;

    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }

    /**
     * Activa el autoplay de la imagen
     */
    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
        // Desactivamos los botones de control
        $botonAvanzar.setAttribute('disabled', true);
        $botonRetroceder.setAttribute('disabled', true);
        $botonPlay.setAttribute('disabled', true);
        $botonStop.removeAttribute('disabled');

    }

    /**
     * Para el autoplay de la imagen
     */
    function stopIntervalo() {
        clearInterval(intervalo);
        // Activamos los botones de control
        $botonAvanzar.removeAttribute('disabled');
        $botonRetroceder.removeAttribute('disabled');
        $botonPlay.removeAttribute('disabled');
        $botonStop.setAttribute('disabled', true);
    }

    // Eventos
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);
    $botonPlay.addEventListener('click', playIntervalo);
    $botonStop.addEventListener('click', stopIntervalo);
    // Iniciar
    renderizarImagen();
}



// CARRUSEL 3

const carrusel3 = document.querySelector(".carrusel-items");

let maxScroll = carrusel3.scrollWidth - carrusel3.clientWidth;
let intervalo = null;
let step = 1;

const start = () =>{
    intervalo = setInterval(function () {
    carrusel3.scrollLeft = carrusel3.scrollLeft + step;
     if(carrusel3.scrollLeft === maxScroll) {
         step = step * -1;
     }else if(carrusel3.scrollLeft === 0){
        step = step * -1;
     }

    }, 10);
};

const stop = () =>{
    clearInterval(intervalo);
};

carrusel3.addEventListener('mouseover',()=>{
    stop();
})

carrusel3.addEventListener('mouseout',()=>{
    start();
})

start();
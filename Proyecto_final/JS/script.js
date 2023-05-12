// Botón de Menu

function openNav(){
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav(){
    document.getElementById("mobile-menu").style.width = "0";
}

const noroeste = document.querySelector("#noroeste")
const patagonia = document.querySelector("#patagonia")
const cuyo = document.querySelector("#cuyo")
const nordeste = document.querySelector("#nordeste")
const pampeana = document.querySelector("#pampeana")
//
if(noroeste){
    // Array que contiene las rutas de las imágenes del carrusel
    const IMAGENES = [
        '../img/cuesta_del_obispo.jpg',
        '../img/garganta_del_diablo.jpg',
        '../img/purmamarca.jpg',
        '../img/salinas_grandes.jpg'
    ];
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 3000;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen_carrusel');
    let intervalo;


// Funcion que cambia la foto en la siguiente posicion

    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }


// Funcion que cambia la foto en la anterior posicion

    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }


// Funcion que actualiza la imagen de imagen dependiendo de posicionActual

    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }


// Activa el autoplay de la imagen

    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
    }

// Eventos
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);

// Iniciar
    playIntervalo();
    renderizarImagen();
}

//Funciones del carrusel

if(patagonia) {

    // Array que contiene las rutas de las imágenes del carrusel
    const IMAGENES = [
        '../img/NahuelHuapi.jpg',
        '../img/PuertoMadryn.jpg',
        '../img/Bariloche.jpg',
        '../img/Andes.webp'
    ];
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 3000;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen_carrusel');
    let intervalo;

    
 // Funcion que cambia la foto en la siguiente posicion

    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }


 // Funcion que cambia la foto en la anterior posicion

    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }


// Funcion que actualiza la imagen de imagen dependiendo de posicionActual

    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }


// Activa el autoplay de la imagen

    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
    }

// Eventos
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);

// Iniciar
    playIntervalo();
    renderizarImagen();
} 

if(cuyo){
    // Array que contiene las rutas de las imágenes del carrusel
    const IMAGENES = [
        '../img/cuyo-ca1.jpg',
        '../img/cuyo-ca2.jpg',
        '../img/cuyo-ca3.jpg',
        '../img/cuyo-ca4.jpg'
    ];
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 3000;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen_carrusel');
    let intervalo;


// Funcion que cambia la foto en la siguiente posicion

    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }


// Funcion que cambia la foto en la anterior posicion

    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }


// Funcion que actualiza la imagen de imagen dependiendo de posicionActual

    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }


// Activa el autoplay de la imagen

    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
    }

// Eventos
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);

// Iniciar
    playIntervalo();
    renderizarImagen();
}

if(nordeste){
    // Array que contiene las rutas de las imágenes del carrusel
    const IMAGENES = [
        '../img/cuesta_del_obispo.jpg',
        '../img/garganta_del_diablo.jpg',
        '../img/purmamarca.jpg',
        '../img/salinas_grandes.jpg'
    ];
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 3000;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen_carrusel');
    let intervalo;


// Funcion que cambia la foto en la siguiente posicion

    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }


// Funcion que cambia la foto en la anterior posicion

    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }


// Funcion que actualiza la imagen de imagen dependiendo de posicionActual

    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }


// Activa el autoplay de la imagen

    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
    }

// Eventos
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);

// Iniciar
    playIntervalo();
    renderizarImagen();
}

if(pampeana){
    // Array que contiene las rutas de las imágenes del carrusel
    const IMAGENES = [
        '../img/cuesta_del_obispo.jpg',
        '../img/garganta_del_diablo.jpg',
        '../img/purmamarca.jpg',
        '../img/salinas_grandes.jpg'
    ];
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 3000;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen_carrusel');
    let intervalo;


// Funcion que cambia la foto en la siguiente posicion

    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }


// Funcion que cambia la foto en la anterior posicion

    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }


// Funcion que actualiza la imagen de imagen dependiendo de posicionActual

    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }


// Activa el autoplay de la imagen

    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
    }

// Eventos
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);

// Iniciar
    playIntervalo();
    renderizarImagen();
}

/* -------------------------- VALIDACION FORMULARIO --------------------------- */

/* se llaman formulario e inputs */
const formulario = document.querySelector("#form")
const inputs = document.querySelectorAll("#form input")

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

/* se crea funcion para validar formularios */
const validarFormulario = (e) =>{
    /* se compara ingreso de usuario contra expresiones regulares y se cambia clases y estilos segun validacion */
    switch (e.target.name) {
        case "nombre":
            /* se ingresan los tres valores de la funcion(expresiones,evento de input,campo) */
            validarCampo(expresiones.nombre, e.target,'nombre');
        break;    
        case "apellido":
            validarCampo(expresiones.apellido, e.target,'apellido');
        break;    
        case "mail":
            validarCampo(expresiones.mail, e.target,'mail');
        break;    
        case "telefono":
            validarCampo(expresiones.telefono, e.target,'telefono');
        break;    
    }
}
/* se crea funcion validar campo para que sea reutilizable */
const validarCampo = (expresion, input, campo) =>{
    if(expresion.test(input.value)){
        document.querySelector(`#${campo}`).classList.remove('input-incorrecto')
        document.querySelector(`#${campo} .text-error`).classList.remove('text-error-activo')
        document.querySelector('#form span').classList.add('barra')
    } else{
        document.querySelector(`#${campo}`).classList.add('input-incorrecto')
        document.querySelector(`#${campo} .text-error`).classList.add('text-error-activo')
        document.querySelector('#form span').classList.remove('barra')
    }
}

/* se crean eventos para los input, al levantar cada tecla y al salir del input */

inputs.forEach((input) =>{
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
});

/*  */
formulario.addEventListener('submit',(e) => {
    e.preventDefault();
    formulario.reset();
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Gracias Por Contactarnos',
        showConfirmButton: false,
        timer: 2400,
        timerProgressBar: true
    })
});
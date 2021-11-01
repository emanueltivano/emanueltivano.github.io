var fondo = document.querySelector('#principal');
var boton = document.getElementById('volver_arriba');
var titulos = document.getElementsByClassName('titulo');
var iconos = document.getElementsByClassName('icono');
var texto = document.getElementsByClassName('texto');
var span = document.getElementsByClassName('span');
var cajas = document.getElementsByClassName('caja');
var bgPersonal = document.getElementsByClassName('bg-personal');

function modoOscuro() {
    fondo.style.backgroundColor = '#252525';
    boton.style.backgroundColor = '#3E64FF';

    for (var i = 0; i < texto.length; i++) {
        texto[i].style.color = 'white';
    }
    for (var i = 0; i < titulos.length; i++) {
        titulos[i].style.color = '#3E64FF';
    }
    for (var i = 0; i < iconos.length; i++) {
        iconos[i].style.filter = 'invert(58%) sepia(86%) saturate(6017%) hue-rotate(219deg) brightness(98%) contrast(106%)';
    }
    for (var i = 0; i < cajas.length; i++) {
        cajas[i].style.backgroundColor = '#242424';
    }
    for (var i = 0; i < bgPersonal.length; i++) {
        bgPersonal[i].style.backgroundColor = '#3E64FF';
    }
}

function modoClaro() {
    fondo.style.backgroundColor = '#ffffff'
    boton.style.backgroundColor = '#5373ff';
    
    for (var i = 0; i < texto.length; i++) {
        texto[i].style.color = 'black';
    }
    for (var i = 0; i < titulos.length; i++) {
        titulos[i].style.color = '#5373ff';
    }
    for (var i = 0; i < iconos.length; i++) {
        iconos[i].style.filter = 'none';
    }
    for (var i = 0; i < cajas.length; i++) {
        cajas[i].style.backgroundColor = '#f8f8f8';
    }
    for (var i = 0; i < bgPersonal.length; i++) {
        bgPersonal[i].style.backgroundColor = '#5373ff';
    }
}
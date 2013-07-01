/*
* RequestAnimFrame es un método estándar, es para crear hilos
* o procesos que se ejecuten continuamente, esto sirve para que nuestro
* juego se ejecute constantemente y nos facilita el trabajo.
* Lo bueno de usar este método es que reconoce si el juego esta con el foco en el
* es decir, si estas en esa página (o pestaña) y no estas en tu Facebook u otra página.
*/
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

// Esta variable la utilizaremos después.
var time;
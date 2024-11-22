var botonPlay = document.getElementById("botonPlay");
var videos = []; // Array para almacenar los elementos de video de p5.js

botonPlay.addEventListener("click", function() {
  // Agregar la clase para la animación de "encoger"
  botonPlay.classList.add("shrink"); 
  // Obtener todos los elementos de video dentro del canvas de p5.js
  videos = document.querySelectorAll('canvas video'); 

  videos.forEach(function(video) {
    vid.muted = true; // Silenciar los videos inicialmente
    vid1.muted = true;
    vid.play(); 
    vid1.play();
    vid.loop();
    vid1.loop();
  
  });

/*button.hide()  // Mostrar un mensaje al usuario indicando que los videos se están reproduciendo en silencio
  alert("Los videos se están reproduciendo silenciados. Haz clic en ellos para activar el sonido.");*/ 
});
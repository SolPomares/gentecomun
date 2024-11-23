var botonPlay = document.getElementById("botonPlay");

  botonPlay.addEventListener("click", function() {
    // Agregar la clase para la animación de "encoger"
    // botonPlay.classList.add("shrink"); 
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

  });

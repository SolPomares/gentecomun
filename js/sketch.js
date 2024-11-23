/*Taller de Obra Final
Universidad Nacional de Quilmes
GarciaPomares Maria Sol
AGOSTO 2024 - Ultima Versión Noviembre 2024*/

//Carga de Variables
var botonPlay = document.getElementById("BotonPlay");
let luces = false;
let posZ = 100;
let vid, vid1;
let cam;

function preload() {
  vid = createVideo ('data/TOF1Mute.mp4');
  vid1 = createVideo ('data/TOF2Mute.mp4');
}

function setup() {
  //Cargo la captura de camara y el modo tridimensional
  canvas = createCanvas(600, 500, WEBGL);
  canvas.parent("sketchcontainer");
  canvas.position(140,130);
  cam = createCapture(VIDEO);
  cam.size(320, 240);
  cam.hide();

  //Cargo el video
 
  vid.size(620, 250);
  vid.hide();
  vid.play();
  vid.elt.muted = true;
  vid1.size(620, 250);
  vid1.hide();
  vid1.play();
  vid1.elt.muted = true;

  //creo un grafico
  grafico = createGraphics(300, 200, WEBGL);
  grafico.background(255, 200, 300);
}

function draw() {
  //Fondo con transparencia variable, cambia segun el mouse
  clear();
  background(0, mouseX);
  noStroke();
  //orbitControl();

  //Ajustes de camara

  camera(mouseX, mouseY, frameCount, 0, 0, 0, 0, 1, 0);

  let locX = mouseX * 2 + width / 2;
  let locY = mouseY + height / 2;

  lights();

  //puedo llamar a cualquier funcion
  //de las que conocemos dentro de este lienzo
  grafico.fill(255, 5, 200);
  grafico.square(250, 150, mouseX / 2, mouseY / 2);

  if (mouseIsPressed == true) {
    //Plano
    push();
    //Textura con video
    texture(vid1);
    //Mueve las coordenadas
    translate(0, 100);
    //Rotacion
    rotateX(HALF_PI / 3);
    //Figura
    plane(500, 500);
    //Cierre
    pop();

    //cubo1
    //
    push();
    texture(vid1);
    translate(-0, -0, 0);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    box(100 + mouseX, 10 * mouseY); //Parámetros: ancho y alto
    pop();

    //cubo2
    push();
    texture(cam);
    translate(-0, -0, 0);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    box(80, 80); //Parámetros: ancho y alto
    pop();
  } else {
    push();
    texture(vid);
    translate(0, 300);
    rotateX(HALF_PI / 3);
    plane(500, 500);
    pop();

    //cubo1
    push();
    texture(vid);
    translate(-0, -0, 0);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    box(100 + mouseX, 10 * mouseY); //Parámetros: ancho y alto
    pop();

    //cubo2
    push();
    texture(vid);
    translate(-0, -0, 0);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.02);
    rotateZ(frameCount * 0.01);
    box(80, 80); //Parámetros: ancho y alto
    pop();

    //esfera1
    push();
    texture(cam);
    translate(-mouseX - 20, -mouseX + 10, mouseX);
    rotateX(frameCount * 0.02);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    sphere(100); //Parámetros: radio
    pop();

    //esfera2
    push();
    texture(cam);
    translate(-mouseX - 10, -150, mouseX);
    rotateX(frameCount * 0.02);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.02);
    ellipsoid(130, 150, 150); //Parámetros: radioX, radioY, radioZ
    pop();

    //esfera3
    push();
    texture(cam);
    translate(mouseX + 10, -250, mouseX + 10);
    rotateX(frameCount * 0.02);
    rotateY(frameCount * 0.02);
    rotateZ(frameCount * 0.01);
    ellipsoid(100, 130, 100); //Parámetros: radioX, radioY, radioZ
    pop();
  }
}

/*Agrego evento para que funcione al clickear botonPlay*/
document.addEventListener('DOMContentLoaded', (event) => {
    var botonPlay = document.getElementById("botonPlay");
    botonPlay.addEventListener("click", function() {
      // botonPlay.classList.add("shrink");
      vid.muted = true;
      vid1.muted = true;
      vid.play();
      vid1.play();
      vid.loop();
      vid1.loop();
    });
});

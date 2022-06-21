window.onload = () => {
  cuadradoResponsivePostura();
  cuadradoResponsiveMedita();
};

window.onresize = () => {
  cuadradoResponsivePostura();
  cuadradoResponsiveMedita();
};

const cuadradoResponsivePostura = () => {
  imagenTonyAncho = document.getElementById("imagen-tony-postura").width;
  imagenTonyAlto = document.getElementById("imagen-tony-postura").height;
  cuadrado = document.getElementById("cuadrado-tony-postura");
  cuadrado.style.width = imagenTonyAncho + "px";
  cuadrado.style.height = imagenTonyAlto + "px";
  console.log(imagenTonyAncho);
  console.log(cuadrado.style.width);
};

const cuadradoResponsiveMedita = () => {
  imagenTonyAncho = document.getElementById("tony-medita").width;
  imagenTonyAlto = document.getElementById("tony-medita").height;
  cuadrado = document.getElementById("cuadrado-tony-medita");
  cuadrado.style.width = imagenTonyAncho + "px";
  cuadrado.style.height = imagenTonyAlto + "px";
};

function masInfo(id, pregunta) {
  if (document.getElementById(id).innerHTML == "") {
    document.getElementById(id).innerHTML = pregunta;
  } else {
    document.getElementById(id).innerHTML = "";
  }
}

const preg1 =
  "No hace falta saber artes marciales antes de ir a una clase, todos comienzan en algún punto y es normal ver gente nueva en las clases.";
const preg2 =
  "Es normal pensar que como es un arte marcial prohibida en muchos países puede llegar a ser peligrosa, pero no es así. Se está prohibido porque puede llegar a ser peligroso en peleas reales competitivas, pero en la práctica de las clases todos nos cuidamos entre todos. Nadie quiere lastimar ni ser lastimado.";
const preg3 =
  "No hay edad para comenzar, los gimnasios suelen tener clases para adultos/jóvenes y para niños. La edad no es un problema.";
const preg4 =
  "Son muy pocas las personas que al comenzar una actividad nueva se compran el equipamiento necesario. Los gimnasios toman en consideración esto y tienen un stock de equipamiento para prestar a los nuevos. Obviamente que esperan que una vez pasado un tiempo te compres tus propias cosas, sino todos estarían utilizando el equipo del gimnasio y no habría para todos.";
const preg5 =
  "¡¡¡Cálmese por favor!!! La realidad es que las personas que realizan artes marciales son más serenas por lo general. Este tipo de deportes hacen de sí mismas una buena herramienta para canalizar la energía, el estrés, la ansiedad e incluso la depresión.";

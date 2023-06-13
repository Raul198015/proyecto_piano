let div1 = document.querySelector("#C1");
let div2 = document.querySelector("#C1sharp");
let div3 = document.querySelector("#D1");
let div4 = document.querySelector("#D1sharp");
let div5 = document.querySelector("#E1");
let div6 = document.querySelector("#F1");
let div7 = document.querySelector("#F1sharp");
let div8 = document.querySelector("#G1");
let div9 = document.querySelector("#G1sharp");
let div10 = document.querySelector("#A1");
let div11 = document.querySelector("#A1sharp");
let div12 = document.querySelector("#B1");
let div13 = document.querySelector("#C2");
let div14 = document.querySelector("#C2sharp");
let div15 = document.querySelector("#D2");
let div16 = document.querySelector("#D2sharp");
let div17 = document.querySelector("#E2");
let div18 = document.querySelector("#F2");
let div19 = document.querySelector("#F2sharp");
let div20 = document.querySelector("#G2");
let div21 = document.querySelector("#G2sharp");
let div22 = document.querySelector("#A3");
let div23 = document.querySelector("#A3sharp");
let div24 = document.querySelector("#B3");

//funcion apretar tecla//

document.addEventListener("keydown", function (evento) {
  if (evento.code === "KeyZ") {
    div1.style.background = "orange";
    div1.style.color = "blue";
    var audio = new Audio("./sonidos/clave01.mp3");
    audio.play();
  } else if (evento.code === "KeyX") {
    div2.style.background = "red";
    div2.style.color = "orange";
    var audio = new Audio("./sonidos/clave02.mp3");
    audio.play();
  } else if (evento.code === "KeyC") {
    div3.style.background = "orange";
    div3.style.color = "blue";
    var audio = new Audio("./sonidos/clave03.mp3");
    audio.play();
  } else if (evento.code === "KeyV") {
    div4.style.background = "red";
    div4.style.color = "orange";
    var audio = new Audio("./sonidos/clave04.mp3");
    audio.play();
  } else if (evento.code === "KeyB") {
    div5.style.background = "orange";
    div5.style.color = "blue";
    var audio = new Audio("./sonidos/clave05.mp3");
    audio.play();
  } else if (evento.code === "KeyN") {
    div6.style.background = "orange";
    div6.style.color = "blue";
    var audio = new Audio("./sonidos/clave06.mp3");
    audio.play();
  } else if (evento.code === "KeyM") {
    div7.style.background = "red";
    div7.style.color = "orange";
    var audio = new Audio("./sonidos/clave07.mp3");
    audio.play();
  } else if (evento.code === "KeyA") {
    div8.style.background = "orange";
    div8.style.color = "blue";
    var audio = new Audio("./sonidos/clave08.mp3");
    audio.play();
  } else if (evento.code === "KeyS") {
    div9.style.background = "red";
    div9.style.color = "orange";
    var audio = new Audio("./sonidos/clave09.mp3");
    audio.play();
  } else if (evento.code === "KeyD") {
    div10.style.background = "orange";
    div10.style.color = "blue";
    var audio = new Audio("./sonidos/clave10.mp3");
    audio.play();
  } else if (evento.code === "KeyF") {
    div11.style.background = "red";
    div11.style.color = "orange";
    var audio = new Audio("./sonidos/clave11.mp3");
    audio.play();
  } else if (evento.code === "KeyG") {
    div12.style.background = "orange";
    div12.style.color = "blue";
    var audio = new Audio("./sonidos/clave12.mp3");
    audio.play();
  } else if (evento.code === "KeyH") {
    div13.style.background = "orange";
    div13.style.color = "blue";
    var audio = new Audio("./sonidos/clave13.mp3");
    audio.play();
  } else if (evento.code === "KeyJ") {
    div14.style.background = "red";
    div14.style.color = "orange";
    var audio = new Audio("./sonidos/clave14.mp3");
    audio.play();
  } else if (evento.code === "KeyK") {
    div15.style.background = "orange";
    div15.style.color = "blue";
    var audio = new Audio("./sonidos/clave15.mp3");
    audio.play();
  } else if (evento.code === "KeyL") {
    div16.style.background = "red";
    div16.style.color = "orange";
    var audio = new Audio("./sonidos/clave16.mp3");
    audio.play();
  } else if (evento.code === "KeyQ") {
    div17.style.background = "orange";
    div17.style.color = "blue";
    var audio = new Audio("./sonidos/clave17.mp3");
    audio.play();
  } else if (evento.code === "KeyW") {
    div18.style.background = "orange";
    div18.style.color = "blue";
    var audio = new Audio("./sonidos/clave18.mp3");
    audio.play();
  } else if (evento.code === "KeyE") {
    div19.style.background = "red";
    div19.style.color = "orange";
    var audio = new Audio("./sonidos/clave19.mp3");
    audio.play();
  } else if (evento.code === "KeyR") {
    div20.style.background = "orange";
    div20.style.color = "blue";
    var audio = new Audio("./sonidos/clave20.mp3");
    audio.play();
  } else if (evento.code === "KeyT") {
    div21.style.background = "red";
    div21.style.color = "orange";
    var audio = new Audio("./sonidos/clave21.mp3");
    audio.play();
  } else if (evento.code === "KeyY") {
    div22.style.background = "orange";
    div22.style.color = "blue";
    var audio = new Audio("./sonidos/clave22.mp3");
    audio.play();
  } else if (evento.code === "KeyU") {
    div23.style.background = "red";
    div23.style.color = "orange";
    var audio = new Audio("./sonidos/clave23.mp3");
    audio.play();
  } else if (evento.code === "KeyI") {
    div24.style.background = "orange";
    div24.style.color = "blue";
    var audio = new Audio("./sonidos/clave24.mp3");
    audio.play();
  }
});

//funcion click raton//

div1.addEventListener("mousedown", function () {
  div1.style.backgroundColor = "green";
  div1.style.color = "blue";
  let sound1 = new Audio("./sonidos/clave01.mp3");
  C1.addEventListener("click", () => {
    sound1.play();
  });
});
div2.addEventListener("mousedown", function () {
  div2.style.backgroundColor = "blue";
  div2.style.color = "yellow";
  let sound2 = new Audio("./sonidos/clave02.mp3");
  C1sharp.addEventListener("click", () => {
    sound2.play();
  });
});
div3.addEventListener("mousedown", function () {
  div3.style.backgroundColor = "green";
  div3.style.color = "blue";
  let sound3 = new Audio("./sonidos/clave03.mp3");
  D1.addEventListener("click", () => {
    sound3.play();
  });
});
div4.addEventListener("mousedown", function () {
  div4.style.backgroundColor = "blue";
  div4.style.color = "yellow";
  let sound4 = new Audio("./sonidos/clave04.mp3");
  D1sharp.addEventListener("click", () => {
    sound4.play();
  });
});
div5.addEventListener("mousedown", function () {
  div5.style.backgroundColor = "green";
  div5.style.color = "blue";
  let sound5 = new Audio("./sonidos/clave05.mp3");
  E1.addEventListener("click", () => {
    sound5.play();
  });
});
div6.addEventListener("mousedown", function () {
  div6.style.backgroundColor = "green";
  div6.style.color = "blue";
  let sound6 = new Audio("./sonidos/clave06.mp3");
  F1.addEventListener("click", () => {
    sound6.play();
  });
});
div7.addEventListener("mousedown", function () {
  div7.style.backgroundColor = "blue";
  div7.style.color = "yellow";
  let sound7 = new Audio("./sonidos/clave07.mp3");
  F1sharp.addEventListener("click", () => {
    sound7.play();
  });
});
div8.addEventListener("mousedown", function () {
  div8.style.backgroundColor = "green";
  div8.style.color = "blue";
  let sound8 = new Audio("./sonidos/clave08.mp3");
  G1.addEventListener("click", () => {
    sound8.play();
  });
});
div9.addEventListener("mousedown", function () {
  div9.style.backgroundColor = "blue";
  div9.style.color = "yellow";
  let sound9 = new Audio("./sonidos/clave09.mp3");
  G1sharp.addEventListener("click", () => {
    sound9.play();
  });
});
div10.addEventListener("mousedown", function () {
  div10.style.backgroundColor = "green";
  div10.style.color = "blue";
  let sound10 = new Audio("./sonidos/clave10.mp3");
  A1.addEventListener("click", () => {
    sound10.play();
  });
});
div11.addEventListener("mousedown", function () {
  div11.style.backgroundColor = "blue";
  div11.style.color = "yellow";
  let sound11 = new Audio("./sonidos/clave11.mp3");
  A1sharp.addEventListener("click", () => {
    sound11.play();
  });
});
div12.addEventListener("mousedown", function () {
  div12.style.backgroundColor = "green";
  div12.style.color = "blue";
  let sound12 = new Audio("./sonidos/clave12.mp3");
  B1.addEventListener("click", () => {
    sound12.play();
  });
});
div13.addEventListener("mousedown", function () {
  div13.style.backgroundColor = "green";
  div13.style.color = "blue";
  let sound13 = new Audio("./sonidos/clave13.mp3");
  C2.addEventListener("click", () => {
    sound13.play();
  });
});
div14.addEventListener("mousedown", function () {
  div14.style.backgroundColor = "blue";
  div14.style.color = "yellow";
  let sound14 = new Audio("./sonidos/clave14.mp3");
  C2sharp.addEventListener("click", () => {
    sound14.play();
  });
});
div15.addEventListener("mousedown", function () {
  div15.style.backgroundColor = "green";
  div15.style.color = "blue";
  let sound15 = new Audio("./sonidos/clave15.mp3");
  D2.addEventListener("click", () => {
    sound15.play();
  });
});
div16.addEventListener("mousedown", function () {
  div16.style.backgroundColor = "blue";
  div16.style.color = "yellow";
  let sound16 = new Audio("./sonidos/clave16.mp3");
  D2sharp.addEventListener("click", () => {
    sound16.play();
  });
});
div17.addEventListener("mousedown", function () {
  div17.style.backgroundColor = "green";
  div17.style.color = "blue";
  let sound17 = new Audio("./sonidos/clave17.mp3");
  E2.addEventListener("click", () => {
    sound17.play();
  });
});
div18.addEventListener("mousedown", function () {
  div18.style.backgroundColor = "green";
  div18.style.color = "blue";
  let sound18 = new Audio("./sonidos/clave18.mp3");
  F2.addEventListener("click", () => {
    sound18.play();
  });
});
div19.addEventListener("mousedown", function () {
  div19.style.backgroundColor = "blue";
  div19.style.color = "yellow";
  let sound19 = new Audio("./sonidos/clave19.mp3");
  F2sharp.addEventListener("click", () => {
    sound19.play();
  });
});
div20.addEventListener("mousedown", function () {
  div20.style.backgroundColor = "green";
  div20.style.color = "blue";
  let sound20 = new Audio("./sonidos/clave20.mp3");
  G2.addEventListener("click", () => {
    sound20.play();
  });
});
div21.addEventListener("mousedown", function () {
  div21.style.backgroundColor = "blue";
  div21.style.color = "yellow";
  let sound21 = new Audio("./sonidos/clave21.mp3");
  G2sharp.addEventListener("click", () => {
    sound21.play();
  });
});
div22.addEventListener("mousedown", function () {
  div22.style.backgroundColor = "green";
  div22.style.color = "blue";
  let sound22 = new Audio("./sonidos/clave22.mp3");
  A3.addEventListener("click", () => {
    sound22.play();
  });
});
div23.addEventListener("mousedown", function () {
  div23.style.backgroundColor = "blue";
  div23.style.color = "yellow";
  let sound23 = new Audio("./sonidos/clave23.mp3");
  A3sharp.addEventListener("click", () => {
    sound23.play();
  });
});
div24.addEventListener("mousedown", function () {
  div24.style.backgroundColor = "green";
  div24.style.color = "blue";
  let sound24 = new Audio("./sonidos/clave24.mp3");
  B3.addEventListener("click", () => {
    sound24.play();
  });
});

//funcion soltar tecla//

document.addEventListener("keyup", function (evento) {
  if (evento.code === "KeyZ") {
    div1.style.backgroundColor = "white";
    div1.style.color = "black";
  } else if (evento.code === "KeyX") {
    div2.style.backgroundColor = "black";
    div2.style.color = "white";
  } else if (evento.code === "KeyC") {
    div3.style.backgroundColor = "white";
    div3.style.color = "black";
  } else if (evento.code === "KeyV") {
    div4.style.backgroundColor = "black";
    div4.style.color = "white";
  } else if (evento.code === "KeyB") {
    div5.style.backgroundColor = "white";
    div5.style.color = "black";
  } else if (evento.code === "KeyN") {
    div6.style.backgroundColor = "white";
    div6.style.color = "black";
  } else if (evento.code === "KeyM") {
    div7.style.backgroundColor = "black";
    div7.style.color = "white";
  } else if (evento.code === "KeyA") {
    div8.style.backgroundColor = "white";
    div8.style.color = "black";
  } else if (evento.code === "KeyS") {
    div9.style.backgroundColor = "black";
    div9.style.color = "white";
  } else if (evento.code === "KeyD") {
    div10.style.backgroundColor = "white";
    div10.style.color = "black";
  } else if (evento.code === "KeyF") {
    div11.style.backgroundColor = "black";
    div11.style.color = "white";
  } else if (evento.code === "KeyG") {
    div12.style.backgroundColor = "white";
    div12.style.color = "black";
  } else if (evento.code === "KeyH") {
    div13.style.backgroundColor = "white";
    div13.style.color = "black";
  } else if (evento.code === "KeyJ") {
    div14.style.backgroundColor = "black";
    div14.style.color = "white";
  } else if (evento.code === "KeyK") {
    div15.style.backgroundColor = "white";
    div15.style.color = "black";
  } else if (evento.code === "KeyL") {
    div16.style.backgroundColor = "black";
    div16.style.color = "white";
  } else if (evento.code === "KeyQ") {
    div17.style.backgroundColor = "white";
    div17.style.color = "black";
  } else if (evento.code === "KeyW") {
    div18.style.backgroundColor = "white";
    div18.style.color = "black";
  } else if (evento.code === "KeyE") {
    div19.style.backgroundColor = "black";
    div19.style.color = "white";
  } else if (evento.code === "KeyR") {
    div20.style.backgroundColor = "white";
    div20.style.color = "black";
  } else if (evento.code === "KeyT") {
    div21.style.backgroundColor = "black";
    div21.style.color = "white";
  } else if (evento.code === "KeyY") {
    div22.style.backgroundColor = "white";
    div22.style.color = "black";
  } else if (evento.code === "KeyU") {
    div23.style.backgroundColor = "black";
    div23.style.color = "white";
  } else if (evento.code === "KeyI") {
    div24.style.backgroundColor = "white";
    div24.style.color = "black";
  }
});

//funcion soltar click raton//

div1.addEventListener("mouseup", function (evento) {
  div1.style.backgroundColor = "white";
  div1.style.color = "black";
});
div2.addEventListener("mouseup", function (evento) {
  div2.style.backgroundColor = "black";
  div2.style.color = "white";
});
div3.addEventListener("mouseup", function (evento) {
  div3.style.backgroundColor = "white";
  div3.style.color = "black";
});
div4.addEventListener("mouseup", function (evento) {
  div4.style.backgroundColor = "black";
  div4.style.color = "white";
});
div5.addEventListener("mouseup", function (evento) {
  div5.style.backgroundColor = "white";
  div5.style.color = "black";
});
div6.addEventListener("mouseup", function (evento) {
  div6.style.backgroundColor = "white";
  div6.style.color = "black";
});
div7.addEventListener("mouseup", function (evento) {
  div7.style.backgroundColor = "black";
  div7.style.color = "white";
});
div8.addEventListener("mouseup", function (evento) {
  div8.style.backgroundColor = "white";
  div8.style.color = "black";
});
div9.addEventListener("mouseup", function (evento) {
  div9.style.backgroundColor = "black";
  div9.style.color = "white";
});
div10.addEventListener("mouseup", function (evento) {
  div10.style.backgroundColor = "white";
  div10.style.color = "black";
});
div11.addEventListener("mouseup", function (evento) {
  div11.style.backgroundColor = "black";
  div11.style.color = "white";
});
div12.addEventListener("mouseup", function (evento) {
  div12.style.backgroundColor = "white";
  div12.style.color = "black";
});
div13.addEventListener("mouseup", function (evento) {
  div13.style.backgroundColor = "white";
  div13.style.color = "black";
});
div14.addEventListener("mouseup", function (evento) {
  div14.style.backgroundColor = "black";
  div14.style.color = "white";
});
div15.addEventListener("mouseup", function (evento) {
  div15.style.backgroundColor = "white";
  div15.style.color = "black";
});
div16.addEventListener("mouseup", function (evento) {
  div16.style.backgroundColor = "black";
  div16.style.color = "white";
});
div17.addEventListener("mouseup", function (evento) {
  div17.style.backgroundColor = "white";
  div17.style.color = "black";
});
div18.addEventListener("mouseup", function (evento) {
  div18.style.backgroundColor = "white";
  div18.style.color = "black";
});
div19.addEventListener("mouseup", function (evento) {
  div19.style.backgroundColor = "black";
  div19.style.color = "white";
});
div20.addEventListener("mouseup", function (evento) {
  div20.style.backgroundColor = "white";
  div20.style.color = "black";
});
div21.addEventListener("mouseup", function (evento) {
  div21.style.backgroundColor = "black";
  div21.style.color = "white";
});
div22.addEventListener("mouseup", function (evento) {
  div22.style.backgroundColor = "white";
  div22.style.color = "black";
});
div23.addEventListener("mouseup", function (evento) {
  div23.style.backgroundColor = "black";
  div23.style.color = "white";
});
div24.addEventListener("mouseup", function (evento) {
  div24.style.backgroundColor = "white";
  div24.style.color = "black";
});

pianoKeys = document.querySelectorAll(".piano-keys .key .equivalencia");
keysCheckbox = document.querySelector(".keys-checkbox input");
pianoNotas = document.querySelectorAll(".piano-keys .key .notas");
notasCheckbox = document.querySelector(".notes-checkbox input");
volumeSlider = document.querySelector(".volume-slider input");

const showHideKeys = () => {
  //pon y quita la clase hide
  pianoKeys.forEach((equivalencia) => equivalencia.classList.toggle("hide"));
};

const showHideNotes = () => {
  //pon y quita la clase hide
  pianoNotas.forEach((notas) => notas.classList.toggle("hide"));
};

const handleVolume = (e) => {
  audio.volume = e.target.value; //convertir el valor del slide en el valor del volumen del audio
};

notasCheckbox.addEventListener("click", showHideNotes);
keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);

var dropdown = document.querySelectorAll("nav ul li a");
for (var i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function (e) {
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
    e.preventDefault();
  });
}

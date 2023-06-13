pianoKeys = document.querySelectorAll(".piano-keys .key .equivalencia");
keysCheckbox = document.querySelector(".keys-checkbox input");
pianoNotas = document.querySelectorAll(".piano-keys .key .notas");
notasCheckbox = document.querySelector(".notes-checkbox input");
volumeSlider = document.querySelector(".volume-slider input");

const showHideKeys = () => {
  //pon y quita la clase hide
  pianoKeys.forEach(equivalencia => equivalencia.classList.toggle("hide"));
}

const showHideNotes = () => {
  //pon y quita la clase hide
  pianoNotas.forEach(notas => notas.classList.toggle("hide"));
}

const handleVolume = (e) => {
    audio.volume = e.target.value; //convertir el valor del slide en el valor del volumen del audio
}

notasCheckbox.addEventListener("click", showHideNotes);
keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);

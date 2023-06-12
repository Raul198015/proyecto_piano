primerparrafo = document.getElementById("parrafo1");
primerparrafo.textContent = "Nuevo mensaje del párrafo.";



const pianoKeys = document.querySelectorAll(".contenedorteclas .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input");

const handleVolume = (e) => {
    Audio.volume = e.target ;value;
}

const showHideKeys = () => {
  // toggling hide class from each key on the checkbox click
  pianoKeys.forEach(key => key.classList.toggle("hide"));
}

keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume)

slidervolume = document.querySelector(".slidervolumen input"),
mostrarletras = document.querySelector(".equivalenciateclas input"),

const handleVolume = (e) => {
    audio.volume = e.target value;
}
const showHideteclas = () => {
    document.getElementById("equivalencia")
    pianokeys.forEach(key=> key.classList.toggle("hide"));
}


slidervolume.addEventListener("input", handleVolume)
mostrarletras.addEventListener("click", showHideteclas)

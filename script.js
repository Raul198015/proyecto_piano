pianoKeys = document.querySelectorAll(".piano-keys .key .equivalencia"),
keysCheckbox = document.querySelector(".keys-checkbox input");


const showHideKeys = () => {
  // toggling hide class from each key on the checkbox click
  pianoKeys.forEach(equivalencia => equivalencia.classList.toggle("hide"));
}

keysCheckbox.addEventListener("click", showHideKeys);

pianoNotas = document.querySelectorAll(".piano-keys .key .notas"),
notasCheckbox = document.querySelector(".notes-checkbox input");


const showHideNotes = () => {
  // toggling hide class from each key on the checkbox click
  pianoNotas.forEach(notas => notas.classList.toggle("hide"));
}

notasCheckbox.addEventListener("click", showHideNotes);
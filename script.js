const container = document.getElementById('container');
const keysToDivs = {
  'KeyA': 'Div A',
  'KeyB': 'Div B',
  'KeyC': 'Div C',
  // Agrega más teclas y contenido de div aquí
};

document.addEventListener('keydown', function(event) {
  const key = event.code;
  
  if (key in keysToDivs) {
    const divContent = keysToDivs[key];
    const div = document.createElement('div');
    div.textContent = divContent;
    container.appendChild(div);
  }
});

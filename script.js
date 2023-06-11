let div1 = document.querySelector('#C1');
let div2 = document.querySelector('#C1sharp');
let div3 = document.querySelector('#D1');
let div4 = document.querySelector('#D1sharp');
let div5 = document.querySelector('#E1');
let div6 = document.querySelector('#F1');
let div7 = document.querySelector('#F1sharp');
let div8 = document.querySelector('#G1');
let div9 = document.querySelector('#G1sharp');
let div10 = document.querySelector('#A1');
let div11 = document.querySelector('#A1sharp');
let div12 = document.querySelector('#B1');
let div13 = document.querySelector('#C2');
let div14 = document.querySelector('#C2sharp');
let div15 = document.querySelector('#D2');
let div16 = document.querySelector('#D2sharp');
let div17 = document.querySelector('#E2');
let div18 = document.querySelector('#F2');
let div19 = document.querySelector('#F2sharp');
let div20 = document.querySelector('#G2');
let div21 = document.querySelector('#G2sharp');
let div22 = document.querySelector('#A3');
let div23 = document.querySelector('#A3sharp');
let div24 = document.querySelector('#B3');

//funcion apretar tecla//

document.addEventListener('keydown',  function(evento) {
  if (evento.code === 'KeyZ') {
    div1.style.backgroundColor = 'yellow';
    var audio = new Audio('./sonidos/clave01.mp3');
    audio.play();
    } else if (evento.code === 'KeyX') {
    div2.style.backgroundColor = 'red';
    var audio = new Audio('./sonidos/clave02.mp3');
    audio.play();
    }
  if (evento.code === 'KeyC') {
    div3.style.backgroundColor = 'yellow';
    var audio = new Audio('./sonidos/clave03.mp3');
    audio.play();
    } else if (evento.code === 'KeyV') {
    div4.style.backgroundColor = 'red';
    var audio = new Audio('./sonidos/clave04.mp3');
    audio.play();
    }
  if (evento.code === 'KeyB') {
    div5.style.backgroundColor = 'yellow';
    var audio = new Audio('./sonidos/clave05.mp3');
    audio.play();
    } else if (evento.code === 'KeyN') {
    div6.style.backgroundColor = 'yellow';
    var audio = new Audio('./sonidos/clave06.mp3');
    audio.play();
    }
  if (evento.code === 'KeyM') {
    div7.style.backgroundColor = 'red';
    var audio = new Audio('./sonidos/clave07.mp3');
    audio.play();
    } else if (evento.code === 'KeyA') {
    div8.style.backgroundColor = 'yellow';
    var audio = new Audio('./sonidos/clave08.mp3');
    audio.play();
    }
  if (evento.code === 'KeyS') {
    div9.style.backgroundColor = 'red';
    var audio = new Audio('./sonidos/clave09.mp3');
    audio.play();
    } else if (evento.code === 'KeyD') {
    div10.style.backgroundColor = 'yellow';
    var audio = new Audio('./sonidos/clave10.mp3');
    audio.play();
    }
  if (evento.code === 'KeyF') {
    div11.style.backgroundColor = 'red';
    var audio = new Audio('./sonidos/clave11.mp3');
    audio.play();
    } else if (evento.code === 'KeyG') {
    div12.style.backgroundColor = 'yellow';
    var audio = new Audio('./sonidos/clave12.mp3');
    audio.play();
    }
  if (evento.code === 'KeyH') {
    div13.style.backgroundColor = 'yellow';
    var audio = new Audio('./sonidos/clave13.mp3');
    audio.play();

    } else if (evento.code === 'KeyJ') {
    div14.style.backgroundColor = 'red';
    var audio = new Audio('./sonidos/clave14.mp3');
    audio.play();
    }
  if (evento.code === 'KeyK') {
    div15.style.backgroundColor = 'yellow';
    var audio = new Audio('./sonidos/clave15.mp3');
    audio.play();
    } else if (evento.code === 'KeyL') {
    div16.style.backgroundColor = 'red';
    var audio = new Audio('./sonidos/clave16.mp3');
    audio.play();
    }
  if (evento.code === 'KeyQ') {
    div17.style.backgroundColor = 'yellow';
    var audio = new Audio('./sonidos/clave17.mp3');
    audio.play();
    } else if (evento.code === 'KeyW') {
    div18.style.backgroundColor = 'yellow';
    var audio = new Audio('./sonidos/clave18.mp3');
    audio.play();
    }
  if (evento.code === 'KeyE') {
    div19.style.backgroundColor = 'red';
    var audio = new Audio('./sonidos/clave19.mp3');
    audio.play();
    } else if (evento.code === 'KeyR') {
    div20.style.backgroundColor = 'yellow';
    var audio = new Audio('./sonidos/clave20.mp3');
    audio.play();
    }
  if (evento.code === 'KeyT') {
    div21.style.backgroundColor = 'red';
    var audio = new Audio('./sonidos/clave21.mp3');
    audio.play();
    } else if (evento.code === 'KeyY') {
    div22.style.backgroundColor = 'yellow';
    var audio = new Audio('./sonidos/clave22.mp3');
    audio.play();
    }
  if (evento.code === 'KeyU') {
    div23.style.backgroundColor = 'red';
    var audio = new Audio('./sonidos/clave23.mp3');
    audio.play();
    } else if (evento.code === 'KeyI') {
    div24.style.backgroundColor = 'yellow';
    var audio = new Audio('./sonidos/clave24.mp3');
    audio.play();
    }
    })
    
    //funcion click raton//

div1.addEventListener('mousedown' , function() {
  div1.style.backgroundColor = 'green';
  let sound1 = new Audio('./sonidos/clave01.mp3');
  C1.addEventListener('click', (evento)=>{
  sound1.play();
  })
  });
div2.addEventListener('mousedown', function() {
  div2.style.backgroundColor = 'blue';
  let sound2 = new Audio('./sonidos/clave02.mp3');
  C1sharp.addEventListener('click', ()=>{
  sound2.play();
  }) 
  });
div3.addEventListener('mousedown', function() {
  div3.style.backgroundColor = 'green';
  let sound3 = new Audio('./sonidos/clave03.mp3');
  D1.addEventListener('click', ()=>{
  sound3.play();
  })
  });
div4.addEventListener('mousedown', function() {
  div4.style.backgroundColor = 'blue';
  let sound4 = new Audio('./sonidos/clave04.mp3');
  D1sharp.addEventListener('click', ()=>{
  sound4.play();
  }) 
  });
div5.addEventListener('mousedown', function() {
  div5.style.backgroundColor = 'green';
  let sound5 = new Audio('./sonidos/clave05.mp3');
  E1.addEventListener('click', ()=>{
  sound5.play();
  })
  });
div6.addEventListener('mousedown', function() {
  div6.style.backgroundColor = 'green';
  let sound6 = new Audio('./sonidos/clave06.mp3');
  F1.addEventListener('click', ()=>{
  sound6.play();
  })   
  });
div7.addEventListener('mousedown', function() {
  div7.style.backgroundColor = 'blue';
  let sound7 = new Audio('./sonidos/clave07.mp3');
  F1sharp.addEventListener('click', ()=>{
  sound7.play();
  })
  });
div8.addEventListener('mousedown', function() {
  div8.style.backgroundColor = 'green';
  let sound8 = new Audio('./sonidos/clave08.mp3');
  G1.addEventListener('click', ()=>{
  sound8.play();
  })   
  });
div9.addEventListener('mousedown', function() {
  div9.style.backgroundColor = 'blue';
  let sound9 = new Audio('./sonidos/clave09.mp3');
  G1sharp.addEventListener('click', ()=>{
  sound9.play();
  })
  });
div10.addEventListener('mousedown', function() {
  div10.style.backgroundColor = 'green';
  let sound10 = new Audio('./sonidos/clave10.mp3');
  A1.addEventListener('click', ()=>{
  sound10.play();
  })   
  });
div11.addEventListener('mousedown', function() {
  div11.style.backgroundColor = 'blue';
  let sound11 = new Audio('./sonidos/clave11.mp3');
  A1sharp.addEventListener('click', ()=>{
  sound11.play();
  })
  });
div12.addEventListener('mousedown', function() {
  div12.style.backgroundColor = 'green';
  let sound12 = new Audio('./sonidos/clave12.mp3');
  B1.addEventListener('click', ()=>{
  sound12.play();
  })   
  });
div13.addEventListener('mousedown', function() {
  div13.style.backgroundColor = 'green';
  let sound13 = new Audio('./sonidos/clave13.mp3');
  C2.addEventListener('click', ()=>{
  sound13.play();
  })
  });
div14.addEventListener('mousedown', function() {
  div14.style.backgroundColor = 'blue';
  let sound14 = new Audio('./sonidos/clave14.mp3');
  C2sharp.addEventListener('click', ()=>{
  sound14.play();
  }) 
  });
div15.addEventListener('mousedown', function() {
  div15.style.backgroundColor = 'green';
  let sound15 = new Audio('./sonidos/clave15.mp3');
  D2.addEventListener('click', ()=>{
  sound15.play();
  })
  });
div16.addEventListener('mousedown', function() {
  div16.style.backgroundColor = 'blue';
  let sound16 = new Audio('./sonidos/clave16.mp3');
  D2sharp.addEventListener('click', ()=>{
  sound16.play();
  })
  });
div17.addEventListener('mousedown', function() {
  div17.style.backgroundColor = 'green';
  let sound17 = new Audio('./sonidos/clave17.mp3');
  E2.addEventListener('click', ()=>{
  sound17.play();
  })   
  });
div18.addEventListener('mousedown', function() {
  div18.style.backgroundColor = 'green';
  let sound18 = new Audio('./sonidos/clave18.mp3');
  F2.addEventListener('click', ()=>{
  sound18.play();
  })
  });
div19.addEventListener('mousedown', function() {
  div19.style.backgroundColor = 'blue';
  let sound19 = new Audio('./sonidos/clave19.mp3');
  F2sharp.addEventListener('click', ()=>{
  sound19.play();
  })  
  });
div20.addEventListener('mousedown', function() {
  div20.style.backgroundColor = 'green';
  let sound20 = new Audio('./sonidos/clave20.mp3');
  G2.addEventListener('click', ()=>{
  sound20.play();
  })
  });
div21.addEventListener('mousedown', function() {
  div21.style.backgroundColor = 'blue';
  let sound21 = new Audio('./sonidos/clave21.mp3');
  G2sharp.addEventListener('click', ()=>{
  sound21.play();
  })  
  });
div22.addEventListener('mousedown', function() {
  div22.style.backgroundColor = 'green';
  let sound22 = new Audio('./sonidos/clave22.mp3');
  A3.addEventListener('click', ()=>{
  sound22.play();
  })
  });
div23.addEventListener('mousedown', function() {
  div23.style.backgroundColor = 'blue';
  let sound23 = new Audio('./sonidos/clave23.mp3');
  A3sharp.addEventListener('click', ()=>{
  sound23.play();
  }) 
  });
div24.addEventListener('mousedown', function() {
  div24.style.backgroundColor = 'green';
  let sound24 = new Audio('./sonidos/clave24.mp3');
  B3.addEventListener('click', ()=>{
  sound24.play();
  })
  });

  //funcion soltar tecla//

  document.addEventListener('keyup',  function(evento) {
    if (evento.code === 'KeyZ') {
      div1.style.backgroundColor = 'white';
    } 
    else if (evento.code === 'KeyX') {
      div2.style.backgroundColor = 'black';
    }
    if (evento.code === 'KeyC') {
      div3.style.backgroundColor = 'white';
    } 
    else if (evento.code === 'KeyV') {
      div4.style.backgroundColor = 'black';
    }
    if (evento.code === 'KeyB') {
      div5.style.backgroundColor = 'white';
    }
    else if (evento.code === 'KeyN') {
      div6.style.backgroundColor = 'white';
    }
    if (evento.code === 'KeyM') {
      div7.style.backgroundColor = 'black';
    }
    else if (evento.code === 'KeyA') {
      div8.style.backgroundColor = 'white';
    }
    if (evento.code === 'KeyS') {
      div9.style.backgroundColor = 'black';
    } 
    else if (evento.code === 'KeyD') {
      div10.style.backgroundColor = 'white';
    }
    if (evento.code === 'KeyF') {
      div11.style.backgroundColor = 'black';
    } 
    else if (evento.code === 'KeyG') {
      div12.style.backgroundColor = 'white';
    }
    if (evento.code === 'KeyH') {
      div13.style.backgroundColor = 'white';
    } 
    else if (evento.code === 'KeyJ') {
      div14.style.backgroundColor = 'black';
    }
    if (evento.code === 'KeyK') {
      div15.style.backgroundColor = 'white';
    }
    else if (evento.code === 'KeyL') {
      div16.style.backgroundColor = 'black';
    }
    if (evento.code === 'KeyQ') {
      div17.style.backgroundColor = 'white';
    } 
    else if (evento.code === 'KeyW') {
      div18.style.backgroundColor = 'white';
    }
    if (evento.code === 'KeyE') {
      div19.style.backgroundColor = 'black';
    } 
    else if (evento.code === 'KeyR') {
      div20.style.backgroundColor = 'white';
    }
    if (evento.code === 'KeyT') {
      div21.style.backgroundColor = 'black';
    }
    else if (evento.code === 'KeyY') {
      div22.style.backgroundColor = 'white';
    }
    if (evento.code === 'KeyU') {
      div23.style.backgroundColor = 'black';
    } 
    else if (evento.code === 'KeyI') {
      div24.style.backgroundColor = 'white';
    }
    })
  
    //funcion soltar click raton//

    div1.addEventListener('mouseup' , function(evento) {
      div1.style.backgroundColor = 'white';
    })
    div2.addEventListener('mouseup' , function(evento) {
      div2.style.backgroundColor = 'black';
    })
    div3.addEventListener('mouseup' , function(evento) {
      div3.style.backgroundColor = 'white';
    })
    div4.addEventListener('mouseup' , function(evento) {
      div4.style.backgroundColor = 'black';
    })
    div5.addEventListener('mouseup' , function(evento) {
      div5.style.backgroundColor = 'white';
    })
    div6.addEventListener('mouseup' , function(evento) {
      div6.style.backgroundColor = 'white';
    })
    div7.addEventListener('mouseup' , function(evento) {
      div7.style.backgroundColor = 'black';
    })
    div8.addEventListener('mouseup' , function(evento) {
      div8.style.backgroundColor = 'white';
    })
    div9.addEventListener('mouseup' , function(evento) {
      div9.style.backgroundColor = 'black';
    })
    div10.addEventListener('mouseup' , function(evento) {
      div10.style.backgroundColor = 'white';
    })
    div11.addEventListener('mouseup' , function(evento) {
      div11.style.backgroundColor = 'black';
    })
    div12.addEventListener('mouseup' , function(evento) {
      div12.style.backgroundColor = 'white';
    })
    div13.addEventListener('mouseup' , function(evento) {
      div13.style.backgroundColor = 'white';
    })
    div14.addEventListener('mouseup' , function(evento) {
      div14.style.backgroundColor = 'black';
    })
    div15.addEventListener('mouseup' , function(evento) {
      div15.style.backgroundColor = 'white';
    })
    div16.addEventListener('mouseup' , function(evento) {
      div16.style.backgroundColor = 'black';
    })
    div17.addEventListener('mouseup' , function(evento) {
      div17.style.backgroundColor = 'white';
    })
    div18.addEventListener('mouseup' , function(evento) {
      div18.style.backgroundColor = 'white';
    })
    div19.addEventListener('mouseup' , function(evento) {
      div19.style.backgroundColor = 'black';
    })
    div20.addEventListener('mouseup' , function(evento) {
      div20.style.backgroundColor = 'white';
    })
    div21.addEventListener('mouseup' , function(evento) {
      div21.style.backgroundColor = 'black';
    })
    div22.addEventListener('mouseup' , function(evento) {
      div22.style.backgroundColor = 'white';
    })
    div23.addEventListener('mouseup' , function(evento) {
      div23.style.backgroundColor = 'black';
    })
    div24.addEventListener('mouseup' , function(evento) {
      div24.style.backgroundColor = 'white';
    })
      
      
      
       
    
     
      
      
    
     
    
     
     
       
     
    
     
       
      
       
      
        
    
      

      
     



     
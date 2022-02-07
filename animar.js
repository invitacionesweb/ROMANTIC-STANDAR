var cajaAnimada = document.querySelectorAll("#animado");

function mostrarScroll(){
  var scrollTop = document.documentElement.scrollTop;
  
  for(var i = 0; i < cajaAnimada.length; i++){
    var alturaAnimado = cajaAnimada[i].offsetTop;
    
    if(alturaAnimado - 300 < scrollTop){      
      cajaAnimada[i].style.opacity = 1;
      
      if(i % 2 == 0){
        cajaAnimada[i].classList.add("animarIzq");
      } else if(i % 2 != 0) {
        cajaAnimada[i].classList.add("animarDer");
      }
      
      //cajaAnimada[0].classList.add("animarIzq");
      //cajaAnimada[2].classList.add("animarIzq");
      //cajaAnimada[4].classList.add("animarIzq");
      
      //cajaAnimada[1].classList.add("animarDer");
      //cajaAnimada[3].classList.add("animarDer");
      //cajaAnimada[5].classList.add("animarDer");
    }
  }
    
}

window.addEventListener("scroll", mostrarScroll);
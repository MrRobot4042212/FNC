var flipPeliculas = document.querySelectorAll(".contenedorPeliculas");
var flipOverlay = document.querySelectorAll(".overlay")
var frontPeliculas = document.querySelectorAll(".peliculasActive");
var backPeliculas = document.querySelectorAll(".peliculasBackInactive");
var mostrarFiltros = document.querySelectorAll(".cuerpoPDPA");
var botonFiltrar = document.querySelector(".masFiltros");
var botonQuitarFiltros = document.querySelector(".menosFiltros");
var advFilter = document.querySelector(".filtrosAvanzados");
var basicFilter = document.querySelector(".filtrosBasicos");
var botonDesglose = document.querySelectorAll('.botonGeneros');
var listaGeneros = document.querySelector('.listaGeneros');

var goyaAccion = document.querySelector(".goya");
var boton = document.querySelectorAll(".botonZoom");

flipPeliculas.forEach(function (elemento) {
  elemento.addEventListener('click', function voltear () {
        if (elemento.classList.contains("animacionDefault")) {
            elemento.classList.remove("animacionDefault");
            elemento.classList.add("animacionFlip");
        }
        else if(elemento.classList.contains("animacionFlip")){
          elemento.classList.remove("animacionFlip");
          elemento.classList.add("animacionDefault");
        }
        else{
          elemento.classList.add("animacionDefault");
        }
  });
});



botonDesglose.forEach(function (botonDesglose) {
    botonDesglose.addEventListener('click', function () {
      if (listaGeneros.classList.contains('listaGenerosDesglose')) {
        listaGeneros.classList.remove('listaGenerosDesglose');
        listaGeneros.classList.add('listaGenerosEnglosar');
      } else {
        listaGeneros.classList.remove('listaGenerosEnglosar');
        listaGeneros.classList.add('listaGenerosDesglose');
      }
    });
  });

  let checkOverlayDefault = document.querySelectorAll(".overlayDefault");
  let checkOverlayFlip = document.querySelectorAll(".overlayFlip"); 

  document.addEventListener('DOMContentLoaded', function () {
    checkOverlayDefault.forEach(function (checkOverlay) {
      checkOverlay.children[0].classList.add("tituloPelicula");
    });
    checkOverlayFlip.forEach(function (checkOverlayFlip) {
      checkOverlayFlip.children[0].classList.add("tituloPelicula");
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    checkOverlayFlip.forEach(function (checkOverlayGenero) {
      if (checkOverlayGenero.children.length >= 11) {
        checkOverlayGenero.children[10].classList.add("generoPelicula");
      }
    });
  });
    

    document.addEventListener('DOMContentLoaded', function () {
      checkOverlayFlip.forEach(function (checkOverlayGenero) {
        if (checkOverlayGenero.children.length >= 11) {
          checkOverlayGenero.children[8].classList.add("actorPelicula");
        }
      });
    });


    let inputFiltroGenero = document.querySelectorAll(".genero");
  
    inputFiltroGenero.forEach(function (inputGen) {
      inputGen.addEventListener('click', function () {
        let inputGenValue = inputGen.innerHTML;
        let flipPeliculas = document.querySelectorAll(".contenedorPeliculas");
        inputGen
        flipPeliculas.forEach(function (filtradoGen) {
          let peliculaGenero = filtradoGen.querySelector(".generoPelicula");
          if (peliculaGenero) {
            peliculaGenero = peliculaGenero.innerHTML;
            let belongsToGenre = peliculaGenero.includes(inputGenValue);
            if (belongsToGenre) {
              filtradoGen.style.display = "block";
            } else {
              filtradoGen.style.display = "none";
            }
          }
        });
      });
    });
  


  let contenidoTituloPelicula = document.querySelectorAll(".tituloPelicula");
  let inputFiltroPelicula = document.querySelectorAll(".inputNombrePelicula");
  
  inputFiltroPelicula.forEach(function (inputF) {
    inputF.addEventListener('keydown', function () {
      let inputValue = inputF.value.toLowerCase();
      if (inputValue === ""){
        contenidoTituloPelicula.forEach(function (filtrado) {
          filtrado.style.display = "block";
        });
      }
      let flipPeliculas = document.querySelectorAll(".contenedorPeliculas");
      flipPeliculas.forEach(function (filtrado) {
        let peliculaTitulo = filtrado.querySelector(".tituloPelicula").innerHTML.toLowerCase();
  
        if (peliculaTitulo.includes(inputValue)) {
          filtrado.style.display = "block";
        } else {
          filtrado.style.display = "none";
        }
      });
    });
  });
  

  let inputActorPelicula = document.querySelectorAll(".inputActorPelicula");
  let contenidoActorPelicula = document.querySelectorAll(".actorPelicula");

  inputActorPelicula.forEach(function (inputActor) {
    inputActor.addEventListener('keydown', function () {
      let inputValue = inputActor.value.toLowerCase();
      if (inputValue === ""){
        contenidoActorPelicula.forEach(function (filtrado) {
          filtrado.style.display = "block";
        });
      }
      let flipPeliculas = document.querySelectorAll(".contenedorPeliculas");
      flipPeliculas.forEach(function (filtrado) {
        let peliculaActor = filtrado.querySelector(".actorPelicula").innerHTML.toLowerCase();
        console.log(peliculaActor);
        if (peliculaActor.includes(inputValue)) {
          filtrado.style.display = "block";
        } else {
          filtrado.style.display = "none";
        }
      });
    });
  });



mostrarFiltros.forEach(function (showFilter) {
  botonFiltrar.addEventListener('click', function () {
      if(showFilter.style.gridTemplateColumns = "4fr"){
          showFilter.style.gridTemplateColumns = "1fr 4fr";
          showFilter.style.alignItems = "start";
          basicFilter.classList.add("filtrosBasicosRemove");
          advFilter.classList.remove("filtrosAvanzadosRemove");


          botonFiltrar.style.display="none";
          botonQuitarFiltros.style.display="block";

          botonQuitarFiltros.addEventListener('click', function () {
            showFilter.style.gridTemplateColumns = "4fr";
            botonFiltrar.style.display="block";
            botonQuitarFiltros.style.display="none";
            basicFilter.classList.remove("filtrosBasicosRemove");
            advFilter.classList.add("filtrosAvanzadosRemove");
          });
      }
      else if(showFilter.style.gridTemplateColumns = "1fr 4fr"){
          showFilter.style.gridTemplateColumns = "4fr";
      }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  var elegirPremio = document.querySelector('.elegirPremio');
  elegirPremio.addEventListener('click', function (event) {
    var clickedElement = event.target.closest('.fondo');
    if (clickedElement) {
      let fondoPremios = document.querySelector('.background');
      const aplausosPlay = document.querySelector('.aplausos');

      if (clickedElement.classList.contains("fondo")) {
        clickedElement.classList.remove("fondo");
        clickedElement.classList.add("fondoActivado");
        elegirPremio.classList.add("fondoActivado");
        fondoPremios.classList.add("zoomFondo");
        aplausosPlay.play();

        setTimeout(function () {
          fondoPremios.classList.add("zoomFondoDesaparecer");
          let eleccion = clickedElement.querySelector('.tituloPremio').innerHTML;
          let contenidoPremios = document.querySelector('.contenedorPremio');
          console.log(eleccion);

          switch (eleccion) {

            case 'Premios Goya':

              const comentaristaGoya = document.querySelector('.comentaristaGoya');
              let contenedorGoya = document.querySelector('.contenedorGoya');
              contenedorGoya.style.display = 'grid';
              fondoPremios.classList.add("aparicionEscenario");
              fondoPremios.src="../img/premios/escenarioGoya.jpeg";
              comentaristaGoya.play();

              break;

            case 'Premios Oscar':
              const parrafo = document.querySelector('.traduccion');
              var contenedorTraduccion = document.querySelector('.contenedorTraduccion');
              var nuevoTextoCompleto = "";

              setTimeout(function() {
                index = 0;
                escribirTexto(nuevoTextoCompleto);
            }, 30);

            function escribirTexto() {
              nuevoTextoCompleto=`Damas y caballeros, bienvenidos al escenario más grandioso del mundo del cine: ¡Los Oscar!
              Esta noche nos reunimos para rendir homenaje a la cima del séptimo arte, para celebrar el
              poder de la narración y aplaudir los talentos extraordinarios que han iluminado nuestras 
             pantallas. Desde deslumbrantes interpretaciones hasta realizaciones cinematográficas visionarias, 
             estamos aquí para reconocer la brillantez que ha dejado una marca indeleble en el paisaje cinematográfico global.
             Prepárense para una noche de glamour inigualable, donde los sueños no solo se realizan,
              sino que también son premiados. Mientras nos embarcamos en este viaje cinematográfico, permitamos que la magia de la pantalla plateada nos una a todos. 
             Brindemos por los Oscar, donde la excelencia no solo se reconoce, sino que también se inmortaliza. Luces, cámara, ¡acción! ¡Que comiencen los Oscar! `;
              
             parrafo.innerHTML += nuevoTextoCompleto.charAt(index);
              index++;
          
              if (index < nuevoTextoCompleto.length) {
                  setTimeout(function() {
                      escribirTexto(nuevoTextoCompleto);
                  }, 46);
                }
              else{
                setTimeout(() => {
                  contenedorTraduccion.style.display='none';
                }, 1000);
              }

            }

              const comentaristaOscar= document.querySelector('.comentaristaOscars');
              let contenedorOscars = document.querySelector('.contenedorOscars');
              contenedorOscars.style.display = 'grid';
              fondoPremios.classList.add("aparicionEscenario");
              fondoPremios.src="../img/premios/escenarioOscars.jpeg";
              comentaristaOscar.play();

            break;

            case 'Premios Globos de oro':

              const comentaristaGlobos= document.querySelector('.comentaristaGlobos');
              let contenedorGlobos = document.querySelector('.contenedorGlobos');
              fondoPremios.classList.add("aparicionEscenario");
              fondoPremios.src="../img/premios/escenarioGlobos.jpeg";
              comentaristaGlobos.play();

            break;
          
            default:
              break;
          }
        }, 4000);
      }
    }
  });
});


document.addEventListener('DOMContentLoaded', function () {
    const ratingContainer = document.querySelector('.contenedorStars');
    const stars = ratingContainer.querySelectorAll('.star');
  
    stars.forEach(function (stars) {
    for (let i = 0; i < stars.length; i++) {
      stars[i].addEventListener('mouseover', function () {
        highlightStars(i);
      });
  
      ratingContainer.addEventListener('mouseleave', function () {
        resetStars();
      });
  
      stars[i].addEventListener('click', function () {
        setRating(i + 1);
      });
    }
  
    function highlightStars(index) {
      for (let i = 0; i <= index; i++) {
        stars[i].classList.add('active');
      }
  
      for (let i = index + 1; i < stars.length; i++) {
        stars[i].classList.remove('active');
      }
    }
  
    function resetStars() {
      for (let i = 0; i < stars.length; i++) {
        stars[i].classList.remove('active');
      }
    }
  
    function setRating(rating) {
      resetStars();
  
      for (let i = 0; i < rating; i++) {
        stars[i].classList.add('active');
      }
    }
  });
});

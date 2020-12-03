/* Sector HTML
<div class="buscador">
        <form class="form-inline my-2 my-lg-0" id="formulario">
            <input class="form-control mr-sm-2" type="text" placeholder="Escriba un Álbum" id="buscador__discos">
            <button class="btn btn-primary" id="boton_carritoCompras"><a href="#"><i class="fas fa-shopping-cart"></i></a></button>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit" id="boton__busqueda">Buscar</button>                             
        </form>
</div>
*/

/* Sector JS
const resultado = document.getElementsByClassName("discos");
const formulario = document.getElementById("formulario");


window.onload = () => {
    formulario.addEventListener('submit', validarFormulario);
}
function validarFormulario(e){
    e.preventDefault();
    const buscador = document.querySelector("#buscador__discos").value;

    if (buscador === '') {
        mostrarAlerta("Completa el campo para continuar");
        return;
    }
    
    buscarDiscos(buscador);
}

function mostrarAlerta(mensaje){
    //Esta variable + la condicional evita que se muestre el mensaje de error varias veces en pantalla
    const existeAlerta = document.querySelector('.bg-red-100');
    if(!existeAlerta){
        const alerta = document.createElement('p');
        //Lo siguiente son estilos agregados a la variable, en este caso, "alerta".
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center', 'alert-danger');
        alerta.innerHTML = `
        <strong class="font-bold">Error!</strong>
        <span class="block sm:inline">${mensaje}</span>
        `;
        formulario.appendChild(alerta);

        setTimeout( () =>{
            alerta.remove();
        }, 3000)
    }
}

function buscarDiscos() {
    const url = '../discos.json';
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => {
            mostrarPortadas(resultado);
        })
}

function mostrarPortadas(portadas){
    console.log(portadas)
    //Remueve el elemento anteriormente creado
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }   

    //Itera sobre el array de discos y construye el HTML
    portadas.forEach( imagen => {
        const { titulo, publicacion, precio, portada, sello} = imagen;
        resultado.innerHTML += `
        <img loading="lazy" src="${imagen.portada}" class="card-img-top" alt="Portada Álbum 'Queen'">
                  <div class="card-body">
                      <h5 class="card-title">${titulo}</h5>
                      <p class="card-text">Publicación: ${publicacion} || Sello: ${sello}</p>
                      <p class="card-price">$${precio}</p>
                      <a href="https://open.spotify.com/album/1kkb8xlG9yssEVsWKiEtAB" target="_blank" class="btn btn-primary">Escuchar Álbum</a>
                      <button class="btn btn-primary addCarrito showCarrito">Comprar Álbum</button>
                  </div>
        `
    })
}

*/
//No logré que funcione el buscador :(
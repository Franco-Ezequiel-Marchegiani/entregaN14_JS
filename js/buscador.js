//const endpoint = '../discos.json';
/*  $("#boton__busqueda").click(function(e){
    e.preventDefault()
    $.ajax({
        url: "../discos.json",
        dataType: "json",
        type:"get",
        success: function(response){
            $.each(response.titulo, function(item){
                console.log(item.titulo);
            });
        }
    });
});  */
/* 
const discos = '../discos.json'
const promesa = fetch(discos);
const arrayDiscosVacio = [];
fetch(discos)
    .then(blob => blob.json())
    .then(data => arrayDiscosVacio.push(data));
console.log(arrayDiscosVacio);

function encontrarDiscos(palabraABuscar, arrayDiscosVacio){
    return arrayDiscosVacio.filter(album => {
        const regex = new RegExp (palabraABuscar, 'gi');
        return album.titulo.match(regex) || album.sello.match(regex);
    });
}

const buscar = document.getElementById('buscador__discos');
const sugerencias = document.querySelector('.sugerencias');
buscar.addEventListener('change', displayMatches);
buscar.addEventListener('keyup', displayMatches);
function displayMatches(e){
    const matchArray = encontrarDiscos(e.target.value, arrayDiscosVacio)
    console.log(matchArray);
}

document.getElementById("boton__busqueda").addEventListener('click', function(e){
    e.preventDefault()
}) */
/* 
function buscarDisco(){
    event.preventDefault();
    let botonBusqueda = document.getElementById("buscador__discos").value.toLowerCase();
    let cardDisco = `
    <div class="card" style="width: 18rem;">
        <img loading="lazy" src="${discos.portada}" class="card-img-top" alt="Portada Álbum 'Queen II'">
        <div class="card-body">
            <h5 class="card-title"> ${discos.titulo}</h5>
            <p class="card-text">Publicación: ${discos.publicacion}  || Sello: ${discos.sello} </p>
            <p class="card-price"> ${discos.precio}</p>
            <a href="https://open.spotify.com/album/0NouBnbXRJKFWzm9LwCW0K" class="btn btn-primary" target="_blank">Escuchar Álbum</a>
            <button class="btn btn-primary addCarrito showCarrito">Comprar Álbum</button>    
        </div>
    </div>
    `
    //cardDisco2.innerHTML = carcardDisco;
    let discosFiltrados = discos.filter(item =>{
        if(item.titulo.toLowerCase() == botonBusqueda){
            cardDisco
        }
        return item.titulo.toLowerCase() == botonBusqueda
    });
    console.log(discosFiltrados);
    let procesoFiltrado = item =>{return item.titulo == botonBusqueda}
    let discosFiltro = discos.filter(procesoFiltrado)
    //console.log(discosFiltro); 
}  */
/*  function buscarDisco(){
    event.preventDefault();
    let botonBusqueda = document.getElementById("buscador__discos").value;
    let discosFiltrados = discos.filter( function(disco){
        if(disco != botonBusqueda.value ){
            discos.hide();
        }else{
            discos.show();
        }
    });
    console.log(discosFiltrados);
}  */

//No logré que funcione el buscador :(
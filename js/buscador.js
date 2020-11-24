//const endpoint = '../discos.json';
/* $("#boton__busqueda").click(function(e){
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
}); */

function buscarDisco(){
    event.preventDefault();
    $.ajax("discos.json").done(function(data, status){
        console.log(data);
        alert("Resultado " + data + "\n Estado: " + status);
    });
}
let http_request = null;

function mandarRequest(pagina="/"){
    if(!window.XMLHttpRequest){
        alert("Funcion no soportada");
        return;
    }

    http_request = new XMLHttpRequest();

    http_request.onreadystatechange = leerRespuesta;
    http_request.open('GET', pagina, true);
    http_request.send();
}

function leerRespuesta(){
    if(http_request.readyState == 4){
        if(http_request.status == 200){

            alert(http_request.responseText)

        }else{

            alert("La peticion fallo, error: "+ http_request.status);

        }
    }
}

//FETC

function mandarFetch(pagina="/"){
        fetch(pagina)
        .then(response => response.text())
        .then(data => {
            alert(data);
        });
    }

    //JQUERY

function mandarRequestJQuery(pagina="/"){
    $.get(pagina, function(data){
        alert(data);
    });
}

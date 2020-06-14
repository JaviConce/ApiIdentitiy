$('#btnlogin').click(function (e){
    login();
});
$('#btngetall').click(function (e) {
    getall();
});
$('.btn-editar').click(function (e) {
    console.log("boton pulsado");
    let id = $(this).val();
    console.log("id cogida");
    editar(id);
});
$('#btngettoken').click(function (e) {
    var form = new FormData();
    form.append("grant_type", "password");
    form.append("scopes", "api1");
    form.append("client_id", "api1");
    form.append("client_secret", "secret");
    form.append("UserName", "operador1");
    form.append("password", "123");

    var settings = {
        "url": "https://localhost:5001/connect/token",
        "method": "POST",
        "timeout": 0,
        "processData": false,
        "mimeType": "multipart/form-data",
        "contentType": false,
        "data": form
    };

    $.ajax(settings).done(function (response) {
        alert(response);
    });
});

function editar(id) {
    alert("esta es la id = " + id);
}
function login() {
    let urlToken = 'https://localhost:5001/connect/token';
    let usuario = $('#txtUsuario').val();
    let contraseña = $('#txtPass').val();

    var form = new FormData();
    form.append("grant_type", "password");
    form.append("scopes", "api1");
    form.append("client_id", "api1");
    form.append("client_secret", "secret");
    form.append("UserName", usuario);
    form.append("password", contraseña);

    var settings = {
        "url": urlToken,
        "method": "POST",
        "timeout": 0,
        "processData": false,
        "mimeType": "multipart/form-data",
        "contentType": false,
        "data": form
    };
    
    $.ajax(settings).done(function (response) {
        var json = JSON.parse(response);
        var bearer = json["access_token"];
        console.log(bearer);

        obtenerOrdenes(bearer);


    }).fail(function () {
        alert("Este usuario no existe");
    });

    /*$.ajax(settings).done(function (response) {

        url: urlPedirOrden,
        type: 'POST',
        data: response,
        dataType: 'json',
        contentType: false,
        success: function (data) {
               let datos = JSON.parse(data.d)

               let thisresponse = document.querySelector('#response')
               thisresponse.innerHTML = '';
              for (let item of datos) {
                                    thisresponse.innerHTML += ` 
               <div class="card container mt-5">
        
        <div class="card-body ">
            
            <div class="row">
                <div class="col-9">
                    <b >Nombre: </b><p>${item.Nombre}</p>
                    <b >Responsable: </b><p>${item.ResponsableNombre}</p>
                    <b >Tipo: </b><p>${item.TipoNombre}</p> 
                    <b >PBI: </b><p>${item.PBINombre}</p> 
                </div>
                <div class="col-3">
                    <button id="btnEditar" style="background-color: orange;">Editar</button>
                    <button id="btnEliminar" style="background-color: red;">Eliminar</button>
                </div>
            </div>
        </div>
    </div> `


              }
              window.location = "detail.html";


        },
        error: function(xhr) {
            console.error('Error: ', xhr);
        }
    });*/
}
function obtenerOrdenes(token) {
    var settings = {
        "url": "https://localhost:6001/api/orden",
        "method": "GET",
        "timeout": 0,
        "processData": false,
        "headers": {
            "Authorization": "Bearer " + token,
        },
    };
    console.log(settings);
    $.ajax(settings).done(function (response) {
        cargarDetail(response);
        //window.location = "detail.html";
    });
}
function cargarDetail(datos) {
    
    let thisresponse = document.querySelector('#response');
    thisresponse.innerHTML = '';
    for (let item of datos) {
        console.log(item);
        thisresponse.innerHTML += `
        
        <div class="card container mt-5">
        
        <div class="card-body ">
            
            <div class="row">
                <div class="col-9">
                    <b >Estado nombre: </b><p>${item.estadoNombre}</p>
                    <b >Nombre: </b><p>${item.nombre}</p>
                    <b >Responsable: </b><p>${item.responsableNombre}</p>
                    <b >Tipo: </b><p>${item.tipoNombre}</p> 
                    <b >PBI: </b><p>${item.pbiNombre}</p> 
                </div>
                <div class="col-3">
                    <button class=" btn btn-warning btn-editar" type="button" id="btnEditar" value="${item.id}" style="background-color: orange;">Editar</button>
                    <button class=" btn btn-danger" type="button" id="btnEliminar" value="${item.id}" style="background-color: red;">Eliminar</button>
                </div>
            </div>
        </div>
    </div> `
    }
}

function getall() {
    let urlPrueba = 'http://localhost:6001/api/orden';
    let usuario = $('#txtUsuario').val();
    let contraseña = $('#txtPass').val();
    $.ajax({
        url: urlPrueba,
        type: 'POST',
        data: JSON.stringify({
            ClientId: usuario,
            ClientSecret: contraseña
        }),
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            let respuestaServicioWeb = JSON.parse(data.d);
            $('#resultado').text(respuestaServicioWeb);
            if (respuestaServicioWeb = 'true') {
                window.location = "detail.html";
            }

        },
        error: function (xhr) {
            console.error('Error: ', xhr);
        }

    });
}


function logout() {
    
}


function mostrarid(id){
    alert("Su ID es: "+id)

}

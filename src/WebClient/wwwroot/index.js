
    $('#btnlogin').click(function (e) {
        login();
    });
    $('#btngetall').click(function (e) {
        getall();
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
            console.log(response);
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
        localStorage.setItem("token", bearer);
        obtenerOrdenes(bearer);

        console.log(bearer);
    }).fail(function () {
        alert("Este usuario no existe");
    });

    
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
        //cargarDetail(response);
        let json = JSON.stringify(response);
        console.log(json);
        localStorage.setItem("tareas", json);
        window.location = "detail.html";

    });
}
function cargarDetail() {
    let datos = localStorage.getItem("tareas");
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
                    <button class=" btn btn-warning" type="button" id="btnEditar" value="${item.id}" style="background-color: orange;">Editar</button>
                    <button class=" btn btn-danger" type="button" id="btnEliminar" value="${item.id}" style="background-color: red;">Eliminar</button>
                </div>
            </div>
        </div>
    </div> `
    }
}



function logout() {
    
}


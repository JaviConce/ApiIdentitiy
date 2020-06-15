cargarDetail();
$('#btnEditar').click(function (e) {
    console.log("boton pulsado");
    let id = $(this).val();
    console.log("id cogida");
    editar(id);
});
$('#btnEliminar').click(function (e) {
    console.log("boton pulsado");
    let id = $(this).val();
    console.log("id cogida");
    borrar(id);
});
$('#btnAgregar').click(function (e) {
    agregarTarea();
});

function cargarDetail() {
    let datos;
    if (localStorage.getItem("tareas")) {
        let json = localStorage.getItem("tareas");
        datos = JSON.parse(json);
    }
    
    console.log(datos);
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
function agregarTarea() {
    let urlAdd = 'https://localhost:6001/api/orden';
    
    
    var tarea = {EstadoNombre: $('#txtEstadonombre').val(), Nombre: $('#txtNombre').val(), PBINombre: $('#txtPBINombre').val(), ResponsableNombre: $('#txtResponsablenombre').val(), TipoNombre: $('#txtTiponombre').val() };
    console.log(JSON.stringify(tarea));
    console.log(localStorage.getItem("token"));
    var settings = {
        "url": urlAdd,
        "method": "POST",
        "timeout": 0,
        //"processData": false,
       // "mimeType": "multipart/form-data",
        "contentType": "application/json",
        "data": JSON.stringify(tarea),
        "headers": {
            "Authorization": "Bearer " + localStorage.getItem("token"),
            
        },
    };
    //console.log(form);
    $.ajax(settings).done(function (response) {
        console.log(response);
        $('#modalAgregar').modal('hide');
    }).fail(function () {
        alert("No se pudo realizar la accion");
    });
    
}

/*function editar(id) {
    //alert("esta es la id = " + id);
    let urlDelete = 'https://localhost:6001/api/orden/delete';
    var settings = {
        "url": urlDelete,
        "method": "DELETE",
        "timeout": 0,
        //"processData": false,
        // "mimeType": "multipart/form-data",
        "dataType": "int",
        "data": id,
        "headers": {
            "Authorization": "Bearer " + localStorage.getItem("token"),

        },
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        //$('#modalAgregar').modal('hide');
        alert("Se borro de la base de datos");
    }).fail(function () {
        alert("No se pudo realizar la accion");
    });
}*/
function borrar(id) {
    let urlDelete = 'https://localhost:6001/api/orden/delete/'+id;
    var settings = {
        "url": urlDelete,
        "method": "DELETE",
        "timeout": 0,
        //"processData": false,
        // "mimeType": "multipart/form-data",
        //"dataType": "int",
        //"data": id,
        "headers": {
            "Authorization": "Bearer " + localStorage.getItem("token"),

        },
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        //$('#modalAgregar').modal('hide');
        alert("Se borro de la base de datos");
    }).fail(function () {
        alert("No se pudo realizar la accion");
    });


}
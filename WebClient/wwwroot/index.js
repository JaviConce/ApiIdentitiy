//var config = {
//    authority: "http://localhost:5001",
//    client_id: "js",
//    redirect_uri: "http://localhost:5001/callback.html",
//    response_type: "code",
//    scope: "openid profile api1",
//    post_logout_redirect_uri: "http://localhost:5001/index.html",
//};
//var mgr = new Oidc.UserManager(config);

$('#btnlogin').click(function (e){
    login();
});
$('#btngetall').click(function (e) {
    getall();
});

function getall() {
    $.ajax({
        url: urlPrueba,
        type: 'POST',
        data: JSON.stringify({
            user: usuario,
            pass: contraseña
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



function log() {
    document.getElementById('results').innerText = '';

    Array.prototype.forEach.call(arguments, function (msg) {
        if (msg instanceof Error) {
            msg = "Error: " + msg.message;
        }
        else if (typeof msg !== 'string') {
            msg = JSON.stringify(msg, null, 2);
        }
        document.getElementById('results').innerHTML += msg + '\r\n';
    });
}


/*mgr.getUser().then(function (user) {
    if (user) {
        log("User logged in", user.profile);
    }
    else {
        log("User not logged in");
    }
});*/

function login() {
    //mgr.signinRedirect();
    let urlPrueba = 'http://localhost:5001/Account/Login';
    let usuario = $('#txtUsuario').val();
    let contraseña = $('#txtPass').val();

    $.ajax({
        url: urlPrueba,
        type: 'POST',
        data: JSON.stringify({
            user: usuario,
            pass: contraseña
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

/*function api() {
    mgr.getUser().then(function (user) {
        var url = "http://localhost:5001/identity";

        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = function () {
            log(xhr.status, JSON.parse(xhr.responseText));
        }
        xhr.setRequestHeader("Authorization", "Bearer " + user.access_token);
        xhr.send();
    });
}

function logout() {
    mgr.signoutRedirect();
}*/


function mostrarid(id){
    alert("Su ID es: "+id)

}

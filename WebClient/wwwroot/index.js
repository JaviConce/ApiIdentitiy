var config = {
    authority: "http://localhost:5001",
    client_id: "js",
    redirect_uri: "http://localhost:5001/callback.html",
    response_type: "code",
    scope: "openid profile api1",
    post_logout_redirect_uri: "http://localhost:5001/index.html",
};
var mgr = new Oidc.UserManager(config);

$('#btnlogin').click(function (e){
    login();
});

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


mgr.getUser().then(function (user) {
    if (user) {
        log("User logged in", user.profile);
    }
    else {
        log("User not logged in");
    }
});

function login() {
    mgr.signinRedirect();
}

function api() {
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
}


function mostrarid(id){
    alert("Su ID es: "+id)

}

window.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("my-form");
    const button = document.getElementById("my-form-button");
    const status = document.getElementById("my-form-status");

    function success() {
        form.reset();
        button.setAttribute("disabled", "disabled");
        const myAlert = document.getElementById('toast');
        const bsAlert = new bootstrap.Toast(myAlert);
        bsAlert.show();
    }

    function error() {
        status.innerHTML = "Oops! There was a problem.";
    }

    form.addEventListener("submit", function(ev) {
        ev.preventDefault();
        const data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

function ajax(method, url, data, success, error) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success();
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}
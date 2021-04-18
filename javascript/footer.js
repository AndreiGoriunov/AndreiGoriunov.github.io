let date = new Date();

// Support functions
function l(what) { return document.getElementById(what); }

// On Load
window.onload = function() {
    l("date").innerText = date.getFullYear();
}
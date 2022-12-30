// Support functions
function l(what) {
    return document.getElementById(what);
}

function dropdownFunction() {
    l('dropdown').classList.toggle('show')
    l('dropdown-navbutton').classList.toggle('active-dropdown')
}

document.addEventListener('click', function(event) {
    let element = event.target;
    // dropdown list outside click handler
    if (!element.closest('.dropdown')) {
        if (l('dropdown').classList.contains('show'))
            l('dropdown').classList.remove('show');
        if (l('dropdown-navbutton').classList.contains('active-dropdown'))
            l('dropdown-navbutton').classList.remove('active-dropdown');
    }
}, false);
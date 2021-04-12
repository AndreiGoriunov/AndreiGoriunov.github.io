function validateForm() {
    // First Name
    if (document.registration.firstname.value == "") {
        alert("Please provide your first name.");
        document.registration.firstname.focus();
        return false;
    } else if (document.registration.firstname.value.length < 2) {
        alert("The first name should be more than 1 character long.");
        document.registration.firstname.focus();
        return false;
    }

    // Last Name
    if (document.registration.lastname.value == "") {
        alert("Please provide your last name.");
        document.registration.lastname.focus();
        return false;
    } else if (document.registration.lastname.value.length < 2) {
        alert("The last name should be more than 1 character long.");
        document.registration.lastname.focus();
        return false;
    }

    // Address
    if (document.registration.address.value == "") {
        alert("Please provide your address.");
        document.registration.address.focus();
        return false;
    } else if (document.registration.address.value.length < 2) {
        alert("The address should be more than 1 character long.");
        document.registration.address.focus();
        return false;
    }

    // City
    if (document.registration.city.value == "") {
        alert("Please provide your city.");
        document.registration.city.focus();
        return false;
    } else if (document.registration.city.value.length < 2) {
        alert("The city should be more than 1 character long.");
        document.registration.city.focus();
        return false;
    }

    //State
    if (document.registration.state.value == "") {
        alert("Please choose your state.");
        document.registration.state.focus();
        return false;
    }

    // Zip Code
    if (document.registration.zip.value == "" || isNaN(document.registration.zip.value) ||
        document.registration.zip.value.length != 5) {
        alert("Please provide a zip in the format #####.");
        document.registration.zip.focus();
        return false;
    }

    //Phone
    if (document.registration.phoneNumber.value == "" || isNaN(document.registration.phoneNumber.value) ||
        document.registration.phoneNumber.value.length != 10) {
        alert("Please provide a phone number in the format ##########.");
        document.registration.phoneNumber.focus();
        return false;
    }

    //Phone type
    if (document.registration.phoneType.value == "") {
        alert("Please provide a phone type.");
        document.registration.phoneType.focus();
        return false;
    }

    //Email
    if (!validateEmail()) return false;

}
// Email
function validateEmail() {
    var emailID = document.registration.email.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");
    if (atpos < 1 || (dotpos - atpos < 2)) {
        alert("Please enter correct email ID")
        document.registration.email.focus();
        return false;
    }
    //downloadData();
    return true;
}

/*
function downloadData() {
    let doc = window.document.registration;
    let firstname = doc.firstname.value;
    let lastname = doc.lastname.value;

    let pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(firstname) + "\n" + encodeURIComponent(lastname) + "\n\n");
    pom.setAttribute('download', "formData.txt");
    document.body.appendChild(pom);
    pom.click();
    document.body.removeChild(pom);
}
*/
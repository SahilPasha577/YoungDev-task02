function setError(id, error) {

    document1 = document.getElementById(id);
    document1.getElementsByClassName("formError")[0].innerHTML = error;

}

function clearError() {

    let clear = document.getElementsByClassName("formError");
    for (let a of clear) {

        a.innerHTML = "";

    }
}

function validateForm() {

    let retval = true;
    clearError();

    let name = document.forms["myForm"]["fname"].value;

    if (name.length < 5) {
        setError("name", "Name should  be at least 5 characters long");
        retval = false;
    }

    let email = document.forms["myForm"]["femail"].value;

    if (email.length < 15) {
        setError("email", "Email should be valid")
        retval = false;
    }

    let phone = document.forms["myForm"]["fphone"].value;

    if (phone.length != 11) {
        setError("phone", "Enter valid phone number")
        retval = false;
    }

    let date1 = document.forms["myForm"]["fdate"].value;

    if (date1 == "") {
        setError("date1", "Date of Birth cannot be empty");
        retval = false;
    }

    let gender = document.forms["myForm"]["fgender"].value;

    if (gender == "") {
        setError("gender", "Gender cannot be empty");
        retval = false;
    }

    let address = document.forms["myForm"]["faddress"].value;

    if (address.length < 10) {
        setError("address1", "Enter your valid address");
        retval = false;
    }

    let select = document.forms["myForm"]["fselect"].value;

    if (select == "") {
        setError("selection", "Country cannot be empty");
        retval = false;
    }

    let city = document.forms["myForm"]["fcity"].value;

    if (city.length < 5) {
        setError("city", "Enter valid city name");
        retval = false;
    }

    let postal = document.forms["myForm"]["fpostal"].value;

    if (postal.length != 10) {
        setError("postal", "Enter valid postal code")
        retval = false;
    }


    return retval;

}
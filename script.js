

let emailField = document.getElementById('email').value
let passwordField = document.getElementById('password').value

function signinEvent() {
    // alert("Arey bhai clone hai ye. 😂")

    if(emailField === "" || passwordField === "") {
        // alert("Fields are empty")
        document.getElementById('error-container').style.display = 'block'

    } else {
        alert("Arey bhai clone hai ye. 😂")
    }
}
document.addEventListener("DOMContentLoaded", function() {

let inputBox = document.querySelector("#pwd");
let visibility = document.querySelector('label[for="visibility"]');
let eyeIcon = document.querySelector("img.visibility");
visibility.addEventListener("click", function() {
    if (inputBox.type === "password") {
        inputBox.type = "text";
        eyeIcon.src = "resources/visibility_16dp_304565_FILL0_wght200_GRAD0_opsz20.svg";
    } else {
        inputBox.type = "password";
        eyeIcon.src = "resources/visibility_off_16dp_304565_FILL0_wght200_GRAD0_opsz20.svg";
    }
})

});
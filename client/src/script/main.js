var passwordInput = document.getElementById("password");
var passwordVisibilityChangeButton = document.getElementById("passwordVisibilityChangeButton");

const showPassword = () =>{
    passwordVisibilityChangeButton.setAttribute("onclick", "hidePassword()")
    passwordVisibilityChangeButton.innerHTML = "Esconder Senha";
    passwordInput.setAttribute("type", "text");
    passwordInput.style.backgroundImage = "url('../client/src/imgs/open-eye.svg')";
}

const hidePassword = () =>{
    passwordVisibilityChangeButton.setAttribute("onclick", "showPassword()");
    passwordVisibilityChangeButton.innerHTML = "Mostrar Senha";
    passwordInput.setAttribute("type", "password");
    passwordInput.style.backgroundImage = "url('../client/src/imgs/closed-eye.svg')";
}


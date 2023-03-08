var passwordVisibilityChangeButton = document.getElementById("passwordVisibilityChangeButton");
var passwordInput = document.getElementById("password");


//Change password visibility
const showPassword = () =>{
    passwordVisibilityChangeButton.setAttribute("onclick", "hidePassword()");
    passwordVisibilityChangeButton.innerHTML = "Esconder Senha";
    passwordInput.setAttribute("type", "text");
    passwordInput.style.backgroundImage = "url('../imgs/open-eye.svg')";
};

const hidePassword = () =>{
    passwordVisibilityChangeButton.setAttribute("onclick", "showPassword()");
    passwordVisibilityChangeButton.innerHTML = "Mostrar Senha";
    passwordInput.setAttribute("type", "password");
    passwordInput.style.backgroundImage = "url('../imgs/closed-eye.svg')";
};

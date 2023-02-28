var passwordInput = document.getElementById("password");
var passwordVisibilityChangeButton = document.getElementById("passwordVisibilityChangeButton");
var firstNameInput = document.getElementById("first-name");
var surnameInput = document.getElementById("surname");
var emailInput = document.getElementById("email");
var alertShow = document.getElementById("alertShow");

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

function registerNewUser(){
    fetch("http://127.0.0.1:8080/api/users",
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(
            {
                firstName,
                surName,
                email,
                password
            }
        )
    })
}

function verifyAndSend(){
    if(passwordInput.value.length > 5 && firstNameInput.value.length > 0 && 
        surnameInput.value.length > 0 && emailInput.value.length > 3){
        console.log("approved")
    } else {
        alertShow.innerHTML = "É necessário registrar os dados acima de maneira correta"
    }
}
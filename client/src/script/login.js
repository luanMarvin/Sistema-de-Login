var passwordVisibilityChangeButton = document.getElementById("passwordVisibilityChangeButton");
var passwordInput = document.getElementById("password");
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;

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

//Login service
async function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    const credentials = { email, password };
    const response = await fetch('http://127.0.0.1:8080/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(credentials)
    });
    if(response.status === 404){
        document.getElementById("emailAlert").innerHTML = 'Email Inválido';
    } else {
        document.getElementById("emailAlert").innerHTML = '';
    }
    if(response.status === 401){
        document.getElementById("passwordAlert").innerHTML = 'Senha Incorreta';
    }
    if (response.status === 200){
        const data = await response.json();
        localStorage.setItem('token', data);
        window.location.href = '/client/src/views/profile.html';
    }
}

//Redirect if token exist
const token = localStorage.getItem('token');
if(token){
  location.href = '/client/src/views/profile.html';
};

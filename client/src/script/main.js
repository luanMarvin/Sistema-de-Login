var passwordInput = document.getElementById("password");
var passwordVisibilityChangeButton = document.getElementById("passwordVisibilityChangeButton");
var firstNameInput = document.getElementById("first-name");
var surnameInput = document.getElementById("surname");
var emailInput = document.getElementById("email");
var alertShow = document.getElementById("alertShow");

const showPassword = () =>{
    passwordVisibilityChangeButton.setAttribute("onclick", "hidePassword()");
    passwordVisibilityChangeButton.innerHTML = "Esconder Senha";
    passwordInput.setAttribute("type", "text");
    passwordInput.style.backgroundImage = "url('../client/src/imgs/open-eye.svg')";
};

const hidePassword = () =>{
    passwordVisibilityChangeButton.setAttribute("onclick", "showPassword()");
    passwordVisibilityChangeButton.innerHTML = "Mostrar Senha";
    passwordInput.setAttribute("type", "password");
    passwordInput.style.backgroundImage = "url('../client/src/imgs/closed-eye.svg')";
};

function verifyEmail(email){
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

function verifyPassword(password) {
    let regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return regex.test(password);
};

async function verifyAndSend(){
    result = await fetch(`http://127.0.0.1:8080/api/users/${email}`)
    .then(response => response.json())
    .then(data => {
      console.log(`Data: ${data}`);
      return data
    });
    let verifiedEmail = verifyEmail(emailInput.value);
    let verifiedPassword = verifyPassword(passwordInput.value);
    console.log(`verifiedPassword: ${verifiedPassword}`)
    console.log(`firstNameInput: ${firstNameInput.value.length}`)
    console.log(`surnameInput: ${surnameInput.value.length}`)
    console.log(`verifiedEmail: ${verifiedEmail}`)
    console.log(`result: ${result.length}`)
    if(verifiedPassword == true && firstNameInput.value.length > 0 && 
        surnameInput.value.length > 0 && verifiedEmail == true && result.length == 0){
            firstName = firstNameInput.value;
            surName = surnameInput.value;
            email = emailInput.value;
            password = passwordInput.value;
            data = {firstName, surName, email, password};
            console.log("sucesso")
            fetch("http://127.0.0.1:8080/api/users",
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': 'http://127.0.0.1:5500/'
            },
            method: "POST",
            body: JSON.stringify(data)
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Não foi Possivel se conectar');
          }
          return response.json();
        })
        .then(data => {
          if (data.success) {
            alertShow.innerHTML = "Usuário registrado com sucesso!";
          } else if (data.error) {
            alertShow.innerHTML = "Ocorreu um erro ao registrar o usuário: " + data.error;
          } else {
            //Redirect
          }
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
    } else {
        alertShow.innerHTML = "É necessário registrar os dados acima de maneira correta";
    }
}

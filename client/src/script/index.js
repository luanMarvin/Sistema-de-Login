var passwordInput = document.getElementById("password");
var passwordVisibilityChangeButton = document.getElementById("passwordVisibilityChangeButton");
var firstNameInput = document.getElementById("first-name");
var surnameInput = document.getElementById("surname");
var emailInput = document.getElementById("email");
var alertShow = document.getElementById("alertShow");


//Change password visibility
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

//Regex Test  for Email and Password
function verifyEmail(email){
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

function verifyPassword(password) {
    let regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return regex.test(password);
};

//Check if email is already used
async function verifyDuplicatedEmail(email){
  return await fetch(`http://127.0.0.1:8080/api/users/${email}`)
    .then(response => response.json())
    .then(value => {
      return value;
    })
}

//Check all necessary inputs and send data to database if is correct
async function verifyAndSend(){
  let verifiedEmail = verifyEmail(emailInput.value);
  let verifiedPassword = await verifyPassword(passwordInput.value);
  let verifiedDiplicatedEmail = await verifyDuplicatedEmail(emailInput.value);
  if(verifiedPassword == true && firstNameInput.value.length > 0 && 
    surnameInput.value.length > 0 && verifiedEmail == true && verifiedDiplicatedEmail == true){
    firstName = firstNameInput.value;
    surName = surnameInput.value;
    email = emailInput.value;
    password = passwordInput.value;
    data = {firstName, surName, email, password};
    fetch("http://127.0.0.1:8080/api/users",{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
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
          //
        } else if (data.error) {
          //
        } else {
          //
        }
      })
      .catch(error => {
        console.error("Ocorreu um erro:", error);
      });
      } else {
          alertShow.innerHTML = "É necessário registrar os dados acima de maneira correta";
      }
}

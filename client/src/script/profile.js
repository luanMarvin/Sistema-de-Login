const token = localStorage.getItem('token');

async function getData(token) {
    fetch('http://127.0.0.1:8080/api/autenticated', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      document.getElementById("first-name-title").innerHTML = data.firstName;
      document.getElementById("surname-title").innerHTML = data.surName;
      document.getElementById("email-title").innerHTML = data.email;
    })
    .catch(error => {
      logout();
    });
  }

function logout(){
  localStorage.clear();
  window.location.href = '/client/src/views/logout.html';
}

getData(token);

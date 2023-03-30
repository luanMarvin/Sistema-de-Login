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
    .then(data => console.log(data))
    .catch(error => {
      console.log(error);
      window.location.href = '/client/src/views/logout.html';
    });
  }

function logout(){
  localStorage.clear();
  window.location.href = '/client/src/views/logout.html';
}

getData(token);

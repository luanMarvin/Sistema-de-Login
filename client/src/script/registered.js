const token = localStorage.getItem('token');
if(token){
  location.href = '/client/src/views/profile.html';
};
//Redirect if token exist, NOTE: the profile page clear local storage
const token = localStorage.getItem('token');
if(token){
  location.href = '/client/src/views/profile.html';
};

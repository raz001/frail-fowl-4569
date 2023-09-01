console.log('user logged in')
const login_user = JSON.parse(localStorage.getItem('DB')) || []
const users_arr = (login_user.map((e) => e.userName))
console.log(users_arr)
const login = document.getElementById('login-tag');

if (users_arr.length) login.innerText = "Hi," + ' ' + users_arr[users_arr.length - 1]
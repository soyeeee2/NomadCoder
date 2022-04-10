const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");


function loginSubmit(tomato) {
  tomato.preventDefault();
  console.log(tomato);
}

loginButton.addEventListener("submit", loginSubmit);
// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("input");
// const loginButton = document.querySelector("button");

///리팩토링

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick(){
    console.log("Hi",loginInput.value);
    console.log("click!!");
}

loginButton.addEventListener("click",onLoginBtnClick);
// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("input");
// const loginButton = document.querySelector("button");

///리팩토링

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");


//로그인 버튼 클릭
function onLoginBtnClick(){
    const userName = loginInput.value;

    if(userName===""){
        console.log("Plz write your name");
    } else if(userName.length > 15){
        console.log("Your name is too long!")
    }
    else{
        console.log("Hi",userName);
        console.log("clicked!")
    }
}
    

loginButton.addEventListener("click",onLoginBtnClick);
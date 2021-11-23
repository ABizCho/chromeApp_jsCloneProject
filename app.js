// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("input");
// const loginButton = document.querySelector("button");

///리팩토링

const loginInput = document.querySelector("#login-form input");
//const loginButton = document.querySelector("#login-form button");
const loginForm = document.querySelector("#login-form");


//form submit
function onLoginSubmit(event){ // 매우중요! : submit이벤트 리슨시 실행할 function의 첫번째 인자는 listener가 리슨한 이벤트에 관한 정보가 저장될 공간이다.
    event.preventDefault(); //preventDefault 메소드 : 어떤 function에 대해 브라우저가 기본적으로 수행하는 동작을 막는것
    // const userName = loginInput.value;
    console.log(event); //js가 저장한 데이터를 확인
}    

loginForm.addEventListener("submit",onLoginSubmit);
//매우 중요!! : 이벤트리스너에 첫번째로 들어가는 함수는 해당 이벤트리스너가 감지한 이벤트에 관련한 정보를 해당 함수의 첫번쨰 인자(argument)를 통해 전달받게된다 (by js).
/// 만일 해당 함수의 인자를 비워둔다면 이를 받지 않는다는 뜻으로, 이는 선택사항이다.


// loginButton.addEventListener("click",onLoginBtnClick);
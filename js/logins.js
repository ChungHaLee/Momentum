const loginForm = document.querySelector("#login-form");
// login-form 폼 자체를 가져오고,
const loginInput = document.querySelector("#login-form input");
// 그리고 나서 폼의 입력을 가져온다.

const link = document.querySelector("a");


const greeting = document.querySelector("#greeting")

// 변수를 대문자로 저장하는 이유: 오타를 방지하기 위함
const HIDDEN_CLASSNAME = "hidden";

const USERNAME_KEY = "username"; 


// preventDefault: 기본으로 정의된 브라우저의 기본 실행을 막아줌
// setItem: 첫번째 인자가 keyName(키), 두번째인자가 keyValue(값)
// localStorage: 정보를 저장, 추가, 삭제할 수 있는 브라우저가 가지고 있는 DB 기능의 작은 API
// --> 화면을 새로고침하더라도 localStorage(브라우저)에 저장된 정보를 불러와서 다시 html 에서 보여주기 가능

function onLoginSubmit(event) {
     event.preventDefault(); // 일단 멈추고
     const username = loginInput.value; // 유저 이름을 변수에 저장
     localStorage.setItem(USERNAME_KEY, username); // 브라우저에 유저 이름 저장 (중요)
     loginForm.classList.add(HIDDEN_CLASSNAME);   // 폼을 숨긴다
     paintGreetings(); // h1 태그에 'Hello 유저명' 표시
};


// 폼의 입력을 submit = enter 나 버튼을 누르는 이벤트를 지칭
// 함수명 뒤에 () 를 붙이지 않는 건 함수를 즉시 실행하기 때문
// 브라우저는 onLoginSubmit 함수를 실행시켜, event 를 인자로 받는다
// onLoginSubmit 함수로부터 정보를 받아내어 실행 버튼을 누른다.

function paintGreetings(){
     const username = localStorage.getItem(USERNAME_KEY);
     greeting.innerText = `Hello ${username} !`;  // h1을 백틱(`)으로 문자열 포매팅
     greeting.classList.remove(HIDDEN_CLASSNAME); // h1을 보여준다
};

const savedUsername = localStorage.getItem(USERNAME_KEY);
// getItem: local storage 에서 key 에 대한 값인 value 를 반환

if(savedUsername === null){
     loginForm.classList.remove(HIDDEN_CLASSNAME); // 숨기지 않고
     loginForm.addEventListener("submit", onLoginSubmit) // 보여준다
}
     //show the form
     else{
          paintGreetings();
}

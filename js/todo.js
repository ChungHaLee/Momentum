const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos"


let toDos = []; // 변경가능한 변수로 저장하기(let)

// 배열에 할 일 하나씩 저장
// JSON.stringify = 모든 원소를 문자열로 변환해줌
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// 지울 때, 클릭한 아이템의 id 를 반환해야 어떤 것을 삭제할지 알 수 있음
// event 의 target 의 부모 요소 = li(리스트의 행 자체, 할 일 리스트)
// filter 는 
function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove(); // 삭제
    // 삭제 클릭한 버튼의 원소를 제외하고 업데이트된 리스트를 toDos 에 저장
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos(); // 업데이트된 toDos 리스트를 다시 저장
}


function paintToDo(newTodo) {
    // html 요소를 js (리스트의 원소 하나씩) 로 만들어주기
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "✅";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); //span 을 li 안에 넣어줌
    li.appendChild(button); //button 을 li 안에 넣어줌
    toDoList.appendChild(li); //li 를 toDoList 안에 넣어줌
}


// greetings 처럼 페이지 새로 고침을 막아줘야함
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; 
    // 입력 값을 새로운 변수에 새로 저장
    toDoInput.value = "";
    const newTodoObj = {
        id:Date.now(),
        text:newTodo
    }

    toDos.push(newTodoObj); // toDos 리스트에 할 일을 저장
    paintToDo(newTodoObj); 
    saveToDos();
}

// enter 버튼을 누르면 newToDo 객체에 할 일 추가, 할 일을 리스트화
toDoForm.addEventListener("submit", handleToDoSubmit);

// localStorage 에 저장된 할 일을 객체화해서 콘솔로그하면 문자열로 반환됨
const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos);

// JSON.parse = 문자열을 js 가 알아들을 수 있는 json 객체로 반환
// js 는 내장된 item 을 그냥 반환해줌 (event 처럼)
// arrowFunction은 화살표로 바로 과정을 표시 가능
// forEach 는 리스트의 원소를 하나씩 반환

if (savedToDos !== null) { // 저장된 리스트가 비지 않았다면,
    const parsedToDos = JSON.parse(savedToDos); // 저장된 문자열을 리스트로 변환
    toDos = parsedToDos; // 빈 toDos 리스트를 이전 원소들이 포함된 리스트로 만들어줌(업데이트 가능한 let)
    // console.log(parsedToDos); 
    parsedToDos.forEach(paintToDo); // 할 일 리스트 원소를 하나씩 반환
}
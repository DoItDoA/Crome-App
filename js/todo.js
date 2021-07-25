const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
let toDos = [];

const TODOS_KEY = "toDos";

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // stringify를 안쓰면 "a,b,c"가 저장되고 쓰면 "["a","b","c"]"가 저장
}

function deleteToDo(e) {
  const li = e.target.parentElement; // <button> 상위<li>로 지정  innerText해보면 각각의 값이 달라서 구별 제거 가능
  li.remove(); // li 제거
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //<li>의 id 값을 구별하여 새로 배열에 저장
  saveToDos(); // 바뀐 배열 storage에 저장
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo); // 삭제 클릭시 실행
  span.innerText = newTodo.text; // 입력값 span에 삽입
  toDoList.appendChild(li);
  li.appendChild(span);
  li.appendChild(button);
}

function handleToDoSubmit(e) {
  e.preventDefault();
  const newTodo = toDoInput.value; // value값 비우기전에 따로 변수에 저장
  toDoInput.value = ""; //엔터시 입력창 비우기
  const newTodoObj = {
    id: Date.now(), // 삭제를 구별하기위해 아이디 삽입
    text: newTodo,
  };
  toDos.push(newTodoObj); // 값들을 배열에 삽입
  paintToDo(newTodoObj); // 값들을 HTML에 넣어 화면에 출력
  saveToDos(); // localStorage에 값 저장
}
toDoForm.addEventListener("submit", handleToDoSubmit); // 할일 입력후 엔터시 실행

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos; // 새로고침 했을시 빈 배열로 초기화 안되게 기존의 starage값 저장
  parsedToDos.forEach(paintToDo); // localStorage에 저장된 값들을 화면에 출력
}

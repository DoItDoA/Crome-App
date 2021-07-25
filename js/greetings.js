const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; // "hidden"에서 오타나면 찾기 힘들지만 변수는 찾을수 있다
const USERNAME_KEY = "username";

function onLoginSubmit(e) {
  e.preventDefault(); // form의 자동 새로고침 방지
  loginForm.classList.add(HIDDEN_CLASSNAME); // submit 실행시 입력창 제거
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username); //submit 실행시 localstorage에 key와 value 저장
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `안녕하세요 ${username}님`; // h1에 값 삽입
  greeting.classList.remove(HIDDEN_CLASSNAME); // h1에 클래스 hidden 제거하여 출현
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

// 새로고침했을 때 localstorage에 값이 있으면 h1 뜨게하고 없으면 입력창 뜨기
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME); // localstorage값이 없을 경우 입력창 뜨기
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

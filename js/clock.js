const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const Hours = String(date.getHours()).padStart(2, "0"); // 숫자를 2자리로 표현
  const minusts = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${Hours}:${minusts}:${seconds}`;
}
getClock(); // 새로고침시 바로 시간이 뜨게 하기
setInterval(getClock, 1000); // 1초마다 시간함수 실행

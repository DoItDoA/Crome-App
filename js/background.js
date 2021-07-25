const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img"); //태그 img 생성

bgImage.src = `img/${chosenImage}`; // 태그 img에 src 생성
document.body.appendChild(bgImage); // body 태그에 img 삽입

const quotes = [
  {
    quote:
      "승자와 패자를 분리하는 단 한 가지는 승자는 실행하는 사람이라는 점이다.",
    author: "앤서니 로빈스",
  },
  {
    quote: "불가능과 가능의 차이는 인간의 결단력에 달려 있다.",
    author: "토미 라소다",
  },
  {
    quote: "삶의 상태란 마음의 상태가 반영된 것일 뿐이다.",
    author: "웨인 W.다이어 박사",
  },
  { quote: "크게 생각할 때 성과도 크게 된다.", author: "토머스 J.빌로드" },
  { quote: "세계를 지배하는 것은 상상력이다.", author: "나폴레옹 보나파르트" },
  {
    quote:
      "성공의 가장 중요한 원칙은 한 걸음 더 나아가는 습관을 기르는 것이다.",
    author: "나폴레온 힐",
  },
  {
    quote: "사람들이 원하는 모든 것은 자신의 얘기를 들어줄 사람이다.",
    author: "휴 엘리어트",
  },
  {
    quote: "복수하는 최고의 방법은 네가 잘난 사람이 되는 것이다.",
    author: "마르쿠스 아우렐리우스",
  },
  {
    quote: "상대에게 맞추려면 먼저 상대가 나와 다르다는 것을 인정해야 한다.",
    author: "법정스님",
  },
  {
    quote: "싫어하는 사람을 상대하는 것도 하나의 지혜이다.",
    author: "그라시안",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; // 랜덤으로 명언 선택

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

const newQuote = [
  {
    quote: "앞으로 나아가는 비결은 일단 시작하는 것이다.",
    author: "마크 트웨인",
  },
  {
    quote: "가장 위대한 영광은 실패를 범하지 않는 데서 오지 않는다, 실패하더라도 매번 일어나는 데서 오는 것이다.",
    author: "랄프 왈도 에머슨",
  },
  {
    quote: "만약 당신이 삶의 변화에 대해 진지하다면, 당신은 방법을 찾을 것이고, 만약 그렇지 않다면, 당신은 변명을 찾을 것입니다.",
    author: "젠 신세로",
  },
  {
    quote: "실패는 용납할 수 있다. 누구나 어느 지점에서든 실패하게 마련이다. 내가 용납할 수 없는 건 아무 도전도 하지 않는 것이다.",
    author: "마이클 조던",
  },
  {
    quote: "누군가는 바라고, 다른 누군가는 희망하고 있을 때, 또 다른 누군가는 그것을 현실로 이루어낸다.",
    author: "마이클 조던",
  },
  {
    quote: "실천하고 싶다면, 말하기를 멈추고 움직여라.",
    author: "월트 디즈니",
  },
  {
    quote: "단지 죽은 물고기들만이 물결을 따라 흘러간다는 것을 결고 잊지 말라.",
    author: "말콤 머거리지",
  },
  {
    quote: '"그건 할 수 없어"라는 말을 들을 때마다, 나는 성공이 가까웠음을 안다.',
    author: "마이클 플래틀리",
  },
  {
    quote: "고통이 당신을 붙잡고 있는것이 아니라, 당신이 그 고통을 붙잡고 있는 것이다.",
    author: "석가모니",
  },
  {
    quote: "보석은 마찰 없이 세공이 될 수 없고, 사람 또한 시련들 없이는 완벽해질 수 없다.",
    author: "중국 격언",
  },
  {
    quote: "인생에서 실패한 사람 중 다수는 성공을 목전에 두고도 모른채 포기한 이들이다.",
    author: "에디슨",
  },
  {
    quote: "배는 항구에 있을 때 가장 안전하지만, 그러기 위해 지어진 것은 아니다.",
    author: "존 셰드",
  },
  {
    quote: "완벽의 경지에는 도달할 수 없다. 그러나 완벽을 추구한다면, 탁월함을 얻을 수 있다.",
    author: "빈스 롬바디",
  },
  {
    quote: "성공은 계속되는 실패 속에서도 열정을 잃지 않고 나아가는 것에 달려 있다.",
    author: "윈스턴 처칠",
  },
  {
    quote: "1만 번의 발차기를 한 번에 연습한 사람은 두렵지 않다.",
    author: "이소룡",
  },
  {
    quote: "운은 아무것도 하지 않는 사람을 도울 수 없다.",
    author: "소포클레스",
  },
  {
    quote: "아무 것도 모방하려 하지 않는 사람은 그 무엇도 만들어내지 않는다.",
    author: "살바도르 달리",
  },
  {
    quote: "패배는 종종 일시적인 상태이다. 포기는 영구적인 것이다.",
    author: "메릴린 보스 사반트",
  },
  {
    quote: "물 밖에서 물고기가 되는 것은 매우 힘든 일이지만, 그것이 당신이 진화하는 방법이다.",
    author: "쿠마일 난지아니",
  },
  {
    quote: "인생은 포용하고 극복해야할 파도의 연속이다.",
    author: "다니엘 메이어",
  },
  {
    quote: "가장 훌륭하게 준비한 사람이 되려면 어쩔 수 없이 재미없고 쉽지 않은 것을 해아만 한다.",
    author: "1만년이 지나도 변하지 않는 부의 진실",
  },
  {
    quote: "봄에 피는 꽃도 있고, 가을에 피는 꽃도 있다. 후회를 않할수 없다. 후회를 덜하게 만들자.",
    author: "어느 강의실에서",
  },
  {
    quote: "나보다 성공적인 사람은, 나보다 더 많은것을 이룬사람은, 하기 싫은 일을 나보다 더 많이 한 사람이다.",
    author: "신용하, 세바시",
  },
  {
    quote: "행운 : 노력에 비해 더 쉽고 빠르게 원하는 것을 얻는것, 행운은 곱하기다 내 노력이 '0'이면 행운은 아무리 곱해도 '0'이다.",
    author: "The having",
  },
];

const Quote = document.querySelector("#quote span:first-child");
const Author = document.querySelector("#quote span:last-child");

function quoteNew() {
  const getRandomQuote = newQuote[Math.floor(Math.random() * newQuote.length)];
  Quote.innerText = getRandomQuote.quote;
  Author.innerText = `- ${getRandomQuote.author} -`;
}

quoteNew();
setInterval(quoteNew, 10000);

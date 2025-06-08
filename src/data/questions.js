// src/data/questions.js

const questions = [
  {
    id: 1,
    question: "친구가 요즘 자주 연락이 없고, 약속도 잘 안 지켜요. 이럴 때 나는?",
    options: [
      { text: "혼자 서운해하다가 말거나 다른 친구한테 살짝 얘기함", score: { egen: 1 } },
      { text: "바로 정색하거나 '너 왜그래?'하고 따져봄", score: { teto: 1 } },
    ],
  },
  {
    id: 2,
    question: "약속 전날 나는?",
    options: [
      { text: "입고 갈 옷부터 고민하면서 분위기 체크", score: { egen: 1 } },
      { text: "딱히 신경 안 씀, 그냥 가서 흐름에 맡김", score: { teto: 1 } },
    ],
  },
  {
    id: 3,
    question: "연인과 싸웠을 때 나는?",
    options: [
      { text: "조용히 연락 끊고 내 기분 풀릴 때까지 기다림", score: { egen: 1 } },
      { text: "바로 전화해서 왜 그런 건지 따짐", score: { teto: 1 } },
    ],
  },
  {
    id: 4,
    question: "모임에서 나를 소개해야 할 때 나는?",
    options: [
      { text: "눈치 보면서 짧고 무난하게 소개함", score: { egen: 1 } },
      { text: "내 캐릭터 확실히 보여주려고 노력함", score: { teto: 1 } },
    ],
  },
  {
    id: 5,
    question: "친구가 무거운 짐을 들고 있을 때 나는?",
    options: [
      { text: "눈치 보다가 누가 도와주겠지 생각함", score: { egen: 1 } },
      { text: "바로 '내가 들어줄게!' 하고 나섬", score: { teto: 1 } },
    ],
  },
  {
    id: 6,
    question: "나에 대한 소문이 돌고 있을 때 나는?",
    options: [
      { text: "티는 안 내지만 속으로 엄청 신경 씀", score: { egen: 1 } },
      { text: "그게 사실이면 인정하고, 아니면 말든가~ 태도", score: { teto: 1 } },
    ],
  },
  {
    id: 7,
    question: "친구의 연애 고민을 들을 때 나는?",
    options: [
      { text: "'먼저 연락하지 마. 그 사람이 너를 더 좋아해야지'라고 조언함", score: { egen: 1 } },
      { text: "'좋으면 니가 먼저 연락해보지 뭐~' 라고 말함", score: { teto: 1 } },
    ],
  },
  {
    id: 8,
    question: "혼자 밥 먹는 상황이 생기면 나는?",
    options: [
      { text: "괜히 눈치 보이고 민망해서 테이크아웃함", score: { egen: 1 } },
      { text: "당당하게 맛집 찾아서 혼밥함", score: { teto: 1 } },
    ],
  },
  {
    id: 9,
    question: "내가 좋아하는 스타일의 음식은?",
    options: [
      { text: "분위기 있고 예쁜 음식, 샐러드나 파스타", score: { egen: 1 } },
      { text: "고기나 면류처럼 양 많고 든든한 음식", score: { teto: 1 } },
    ],
  },
  {
    id: 10,
    question: "같이 일하던 사람이 계속 실수를 반복하면?",
    options: [
      { text: "직접 말하긴 부담돼서 참고 넘김", score: { egen: 1 } },
      { text: "그 자리에서 짚고 넘어가야 직성이 풀림", score: { teto: 1 } },
    ],
  },
  {
    id: 11,
    question: "나의 연애 스타일은?",
    options: [
      { text: "상대가 이끌어주고 보호해주는 게 좋음", score: { egen: 1 } },
      { text: "내가 주도권을 쥐고 이끄는 편", score: { teto: 1 } },
    ],
  },
  {
    id: 12,
    question: "나는 주로 어떤 사람에게 끌릴까?",
    options: [
      { text: "든든하고 나를 챙겨주는 사람", score: { egen: 1 } },
      { text: "주관 뚜렷하고 도전적인 사람", score: { teto: 1 } },
    ],
  },
  {
    id: 13,
    question: "사람들과의 갈등이 생기면 나는?",
    options: [
      { text: "직접 말은 안 하고 멀어진다", score: { egen: 1 } },
      { text: "그 자리에서 오해 풀고 정리한다", score: { teto: 1 } },
    ],
  },
  {
    id: 14,
    question: "친구가 내 얘기를 다른 데서 했다는 걸 알았을 때 나는?",
    options: [
      { text: "속상하지만 그냥 관계를 정리함", score: { egen: 1 } },
      { text: "바로 물어보거나 따짐", score: { teto: 1 } },
    ],
  },
  {
    id: 15,
    question: "내가 더 중요하게 생각하는 건?",
    options: [
      { text: "분위기와 조화", score: { egen: 1 } },
      { text: "솔직함과 진정성", score: { teto: 1 } },
    ],
  },
];

export default questions;
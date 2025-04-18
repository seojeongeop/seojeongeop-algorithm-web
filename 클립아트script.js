function runAlgorithm() {
  const symptoms = [
    "피부가 거칠어요",
    "소화가 안돼요",
    "아침에 일어나기 힘들어요",
    "걸음걸이가 틀어졌어요",
    "목에 주름이 있어요",
    "어깨가 한쪽으로 내려갔어요",
    "혈액순환이 안돼요"
  ];

  const result = document.getElementById("result");
  const random = symptoms[Math.floor(Math.random() * symptoms.length)];

  result.innerText
 = `진단 결과: ${random}.  
→ 골반이 틀어졌거나, 몸이 차가운 상태입니다.  
『골반 때문이야』 또는 『열 때문이야』를 참조하세요.`;
}

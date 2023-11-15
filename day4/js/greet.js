// greeting.html

// 2초 간격으로 인사말이 변경할 것
// 콜백함수 기능 사용 - 자기가 부르는 재귀적 용법
// 배열의 인덱스가 1증가하면 인사말이 바뀜
let msg = ["Have a Nice Day !!", "Good Luck", "How are you?"];
let msgInx = 0;

myGreeting(); // 함수 호출

function myGreeting(){
  document.getElementById("demo").innerHTML = msg[msgInx];
  msgInx++;
  if(msgInx == msg.length){ // 인덱스 번호 제한함
    msgInx = 0;
  }
  setTimeout(myGreeting, 2000); // myGreeting() 호출
}
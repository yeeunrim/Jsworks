// fee.html

// 나이에 따른 입장료 계산
let age = prompt("나이를 입력하세요.");
let fee = 0; // 초기화

if(age >= 1 && age < 8 ){
  document.write("[미취학 아동]<br>");
  fee = 1000;
} else if(age >= 8 && age < 14){
  document.write("[초등생]<br>");
  fee =2000;
} else if(age >= 14 && age < 20){
  document.write("[중•고등생]<br>");
  fee =2500;
} else{
  document.write("[성인]<br>");
  fee = 3000;
}

document.write("입장료 : <span class='accent'>" + fee + "</span>원");
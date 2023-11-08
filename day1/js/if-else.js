// if-else.html

// 단독 if문
// 속도위반 판정 프로그램
/*
let limit_speed = 55;
if(limit_speed >= 50){
  document.write("🚫 안전 속도 위반 ! 과태료 10만원 부과 대상 🚫");
}
document.write("<br>시속 : " + limit_speed + "km");
*/

// if~else문
/*
let limit_speed = 45;
if(limit_speed >= 50){
  document.write("🚨 안전 속도 위반 ! 과태료 10만원 부과 대상 🚨");
} else{
  document.write("🚙 안전 속도 준수 !");
}
document.write("<br>시속 : " + limit_speed + "km");
*/

// 속도를 입력받아 속도 위반을 판정하는 프로그램 작성
// 예외(null)처리
let limit_speed = prompt("현재 주행 속도를 입력하세요.(숫자만 입력)");
if(limit_speed == null){
  document.write("입력이 취소되었습니다.<br>다시 입력해주세요.");
} else{
  if(limit_speed >= 50){
    document.write("🚨 안전 속도 위반 ! 과태료 10만원 부과 대상 🚨");
  } else{
    document.write("🚙 안전 속도 준수 !");
  }
  document.write("<br>시속 : " + limit_speed + "km");
}
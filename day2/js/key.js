// key_repeat.html

// y → 계속 반복
// n → 반복 중단
// 다른 키 → 잘못 눌렀습니다.

while(true){
  let key = prompt('계속 반복하시겠습니까?', "y/n");
  if(key == 'y' || key == 'Y'){
    alert("계속 반복합니다.");
  } else if(key == 'n' || key == 'N'){
    alert("반복을 중단합니다.");
    break;
  } else{
    alert("지원하지 않는 키입니다.");
  }
}
document.write("🌐 프로그램 종료 💤");
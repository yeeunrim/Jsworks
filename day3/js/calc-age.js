// calc-age.html

// 나이 계산 프로그램
function calcAge(){
  const CURRENT_YEAR = 2023;
  let your_year, your_age;

  your_year = prompt('태어난 연도를 입력하세요.(YYYY)');
  
  if(your_year == null){
    document.getElementById("print").innerHTML = "입력이 취소되었습니다.";
  } else if(your_year == ""){
    document.getElementById("print").innerHTML = "태어난 연도를 입력해주세요.";
  } else if(isNaN(your_year)){
    document.getElementById("print").innerHTML = "숫자를 입력해주세요.";
  } else {
    your_year = parseInt(your_year);
    your_age = (CURRENT_YEAR - your_year) + 1;

    document.getElementById("print").innerHTML = CURRENT_YEAR + "년 현재<br>" 
      + your_year + "년에 태어난 사람의 나이는 " + your_age + "세입니다.";
    }
}
// function1.html

// 자바스크립트의 경우, 낙타표기법 사용

// 함수 정의
// 매개변수가 없는 함수
function sayHello(){
  document.write("안녕하세요:) 만나서 반가워요 👋🏻<br>");
}

// 매개변수가 있는 함수(매개변수에 자료형이 생략)
function sayHello2(name){
  document.write("안녕하세요:) " + name + "님! 환영합니다 😺<br>");
}

// 구구단으로 출력하는 함수 정의
function gugudan(dan) {
  for(var i=2; i<=9; i++){
    document.write(dan + " X " + i + " = " + (dan*i) + "<br>");
  }
}

// 함수 사용 - 호출
sayHello();
sayHello2("예은");
sayHello2("나경");
sayHello2("JIHUN");
gugudan(5);
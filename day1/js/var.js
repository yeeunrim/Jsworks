// variable.html
// 변수 이름에 예약어는 사용 불가(if, class, for 등)

// ?학생은 ?학년 ?반입니다.
var sName = "임예은";
var sGrade = 3;
var sClass = 4;

// document.write(sName + ", " + sGrade + ", " +  sClass);
// document.write("<br>" + sName + " 학생은 " + sGrade + "학년 " +  sClass + "반입니다.");

// charset(문자셋) 연습
var ch1 = 65;
console.log(ch1);
console.log(String.fromCharCode(ch1));
var ch2 = 'B';
console.log(ch2);
console.log(ch2.charCodeAt(0));

// 유니코드
let ch3 = "가";
console.log(ch3);
// console.write(ch3);
console.log(ch3.charCodeAt(0));
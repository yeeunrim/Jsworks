// const1.html

let current_year = 2023;
current_year = 2022;
console.log(current_year);

const MONTH = 12;
// MONTH = 13; -> 변경되지 않는다. (상수)
console.log("1년은 " + MONTH + "달이 있습니다.");

// 원의 넓이 구하기
const PI = 3.14;
let r = 4;
let circle;
// 연산
circle = r * r * PI;
// 출력
document.write("원의 넓이는 " + circle + "입니다.")

// 공의 속도를 변환하는 프로그램 작성
// KM -> MILE로 변환 (1km = 0.621371mile)
let kph = prompt("구속을 입력하세요(Km/h)", "100");
kph = parseFloat(kph); // 문자를 실수로 변환
const RATE_KPH_MPH = 0.621371;
let mph;
// 연산
mph = kph * RATE_KPH_MPH;
// 출력 - 자리수 설정함수 : toFixed(자릿수)
document.write("<br>공의 속도 : " + kph + "km → " + mph.toFixed(4) + "mile");
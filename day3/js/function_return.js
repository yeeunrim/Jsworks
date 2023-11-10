// function_return.html
// return이 있는 함수

// 제곱수를 계산하는 함수
// 어떤 수를 입력받아 제곱하는 함수
// function square(x){
//   let num =  x * x;
//   return number; // 변수 리턴
// }
let square = function(x){
  return x * x;
}

// function add(x, y){
//   return x + y; // 구문 리턴
// } 
let add = function(x, y){
  return x + y;
}

// 함수 출력
console.log(square(8));

let result = add(5, 7);
console.log(result);
// console.log(add(4, 5));
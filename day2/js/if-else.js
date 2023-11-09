// if-else.html

let num = 13;

// 조건연산자 (? :) - 짝수/홀수 판정
// let result = (num % 2 == 0) ?  "짝수" : "홀수" ;
// console.log(result);
// 3의 배수인지 아닌지를 판정
// let result = (num % 3 == 0) ?  "3의 배수" : "3의 배수 아님" ;
// console.log(result);

// if~else문으로 변경
if(num % 3 == 0){
  document.write("3의 배수");
} else{
  document.write("3의 배수 아님");
}
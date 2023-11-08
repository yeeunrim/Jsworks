// operator.html

let num1 = 8, num2 = 5;
let result;

// 산술연산자 : + - * /
/*
result = num1 + num2;
console.log(result); //13
result = num1 - num2;
console.log(result); //3
result = num1 * num2;
console.log(result); //40
result = num1 / num2;
console.log(result); //1.6
result = num1 % num2;
console.log(result); //3
*/

// 비교연산자 : > < == !=
/*
result = num1 > num2;
console.log(result); //true
console.log(typeof(result)); //boolean
result = num1 < num2;
console.log(result); //false
result = (num1 == num2);
console.log(result); //false
result = (num1 != num2);
console.log(result); //true
*/

// 논리연산자 : &&(AND) ||(OR) !(NOT)
/*
result = (num1 == num2) && (num1 >= num2);
console.log(result); //false
result = (num1 == num2) || (num1 >= num2);
console.log(result); //true
result = !(num1 == num2);
console.log(result); //true
*/

// 조건연산자 
result = (num1 < num2) ? 'T' : 'F';
console.log(result); //F
// 짝수, 홀수 판정
result = (num1 % 2 == 0) ? '짝수' : '홀수';
// console.log(result);
// alert("판정 결과: " + result);
document.write("<span class='access'>판정 결과: " + result + "</span>");
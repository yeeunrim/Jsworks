// array2.html

// Array 객체를 사용한 배열
let num = new Array(); // 빈 배열 생성
console.log(num);
console.log("배열의 길이 : " + num.length + "개");

// 저장(입력)
num[0] = 10;
num[1] = 20;
num[2] = 30;
console.log(num); 

// 특정 요소(값)을 조회(검색)
console.log(num[0]);

// 전체 요소(값)을 조회(검색)
for(let i=0; i<num.length; i++){
  console.log("num[" + i + "] = " + num[i]);
}

// 연산
console.log(num[1] - num[2]); //-10
console.log(num[1] <= num[2]); //true

// 합계와 평균
let sum = 0;
let avg;
for(let i=0; i<num.length; i++){
  sum += num[i];
}
avg = sum / num.length;
console.log("총 합계 = " + sum + ", 평균 = " + avg);

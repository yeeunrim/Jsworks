// forfor.html

// 중첩 for문
for(let i=1; i<=5; i++){
  for(let j=1; j<=5; j++){
    document.write("$");
  }
  document.write("<br>");
}

document.write("<br>");

// 구구단
// for(let i=1; i<=9; i++){
//   for(let j=1; j<=9; j++){
//     document.write(i + " X " + j + " = " + (i*j) + "<br>");
//   }
//   document.write("<br>");
// }

// 직각 삼각형 모양으로 출력
for(let i=1; i<=5; i++){ // 행
  for(let j=1; j<=i; j++){ // 열
    document.write("$");
  }
  document.write("<br>");
}
document.write("<br>");
// for(let i=1; i<=5; i++){ // 행
//   for(let j=1; j<=6-i; j++){ // 열
//     document.write("$");
//   }
//   document.write("<br>");
// }
// j--로 감소시켜서 출력하기 (역직각삼각형)
for(let i=1; i<=5; i++){ // 행
  for(let j=5; j>=i; j--){ // 열
    document.write("$");
  }
  document.write("<br>");
}
document.write("<br>");

// 1부터 20까지 4행으로 출력
for(let i=0; i<4; i++){ // 행
  for(let j=1; j<=5; j++){ // 열
    document.write(5 * i + j + " ");
  }
  document.write("<br>");
}
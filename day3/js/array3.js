// array3.html

// 1~10까지의 자연수를 배열에 저장
// 10개의 길이를 가진 배열 생성
let number = new Array(10);
console.log("number의 길이 = " + number.length);
// 저장
let x = 1;
for(let i=0; i<number.length; i++){
  number[i] = x++;
}
// 전체조회
for(let num in number){
  console.log("number[" + num + "] = " + number[num]);
}

// 알파벳 대문자를 배열의 저장
let alphabet = new Array(26);
console.log("alphabet의 길이 = " + alphabet.length);
// 저장 및 조회
let y = 'A';
//console.log(y.charCodeAt(0));
y = y.charCodeAt(0); // 코드값(65)으로 다시 저장
for(let i=0; i<alphabet.length; i++){
  alphabet[i] = y++;
  // 대문자로 다시 변경 후, 출력
  console.log("alphabet[" + i + "] = " + String.fromCharCode(alphabet[i])); 
}
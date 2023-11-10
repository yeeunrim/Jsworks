// array1.html

// 배열 사용
// 순서가 0번부터 시작함
let animal = []; // 빈 배열 생성
console.log(animal);
console.log("배열의 길이 : " + animal.length + "개");

// 입력(저장) - C(reate)
animal[0] = 'cow';
animal[1] = 'pig';
animal[2] = 'horse';
animal[3] = 'cat';
console.log(animal);

// 특정 요소(값)을 조회(검색) - R(esearch)
console.log(animal[1]);

// 특정 요소(값)을 변경(수정) - U(pdate)
animal[2] = 'dog';

// 특정 요소(값)을 삭제 - D(elete)
// delete animal[1]; -> 데이터만 지워지고 공간은 남아있다.

// 전체 요소(값)을 조회(검색)
// 0번 인덱스부터 시작하고 배열이 길이 미만일 것
for(let i=0; i<animal.length; i++){
  document.write("animal[" + i + "] = " + animal[i] + "<br>");
}
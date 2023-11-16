// create_element2.html

// p태그 생성 - p 자체로는 생성이 안되고 부모가 있어야 한다.
function addP(){
  let newP = document.createElement("p"); // 부모
  let newText = document.createTextNode("숨겨진 텍스트입니다."); // 자식
  newP.appendChild(newText); // p태그에 내용 추가

  // div태그에 p태그 추가
  let div = document.getElementById("info");
  div.appendChild(newP);
}
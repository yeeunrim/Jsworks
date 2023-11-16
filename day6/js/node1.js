// create_element.html

function myFunction(){
  // p태그 생성
  let newLi = document.createElement("li");
  let newText = document.createTextNode("Tea");
  newLi.appendChild(newText);

  let ul = document.getElementById("myList");
  ul.appendChild(newLi);
}
// showhide-event.html

function showText(){
  // 텍스트는 보이고, 보기 버튼은 숨기기
  let text = document.getElementById("detail");
  text.style.display = "block";

  let showBtn = document.getElementById("show")
  showBtn.style.display = "none";
}

function hideText(){
  // 텍스트는 숨기고, 보기 버튼은 보이기
  let text = document.getElementById("detail");
  text.style.display = "none";

  let showBtn = document.getElementById("show")
  showBtn.style.display = "block";
}
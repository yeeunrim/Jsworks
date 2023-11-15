// coffee.html

let bigPic = document.querySelector("#pic");
let smallPics = document.querySelectorAll(".small");


for(let i=0; i<smallPics.length; i++){
  smallPics[i].onclick = function(){
    bigPic.setAttribute("src", this.src);
  }
}

//상세설명 보이기 / 숨기기 구현
let view = document.querySelector("#view");
let detail = document.querySelector("#detail");
let sw = true;

function showhide(){
  if(sw){
    detail.style.display = "block";
    view.innerHTML = "상세 설명 닫기";
    sw = false;
  } else{
    detail.style.display = "none";
    view.innerHTML = "상세 설명 보기";
    sw = true;
  }
}
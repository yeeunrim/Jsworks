// watch.html

// 윈도우 객체의 함수이기 때문에 head 부분에 옮겨도 가능하다.
setInterval(myWatch, 1000);

function myWatch(){
  const NOW = new Date();
  let time = NOW.toLocaleTimeString();

  let watch = document.getElementById("show")
  watch.innerHTML = time;
  watch.style.color = "blue";
}
// watch.html

// 윈도우 객체의 함수이기 때문에 head 부분에 옮겨도 가능하다.
//시계 생성
setInterval(myWatch, 1000);

function myWatch(){
  const now = new Date(); //날짜와 시간 함께 생성
  let time = now.toLocaleTimeString(); //시간만 출력
  console.log(time);

  let watch = document.getElementById("show")
  //watch.innerHTML = time;
  if(now.getHours() <= 12){
    watch.innerHTML = time.replace("오전", "am");
  }else{
    watch.innerHTML = time.replace("오후", "pm");
  }
  watch.style.color = "blue";
}
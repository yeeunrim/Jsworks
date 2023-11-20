// main.html

$(document).ready(function(){
  // alert("안녕~"); -> 연결 확인 작업
  $(window).scroll(function(){
    console.log($(this).scrollTop());

    if($(this).scrollTop() > 100){
      $("#up").addClass("on"); // on class 생성
    } else{
      $("#up").removeClass("on"); // on class 삭제
    }

    // top 메뉴를 클릭하면 스크롤바가 맨 위로 올라감
    $("#up a").click(function(){
      $(window).scrollTop(0); // y좌표를 0으로 세팅
    })
  });
})
// imgslide.html

// 이미지 슬라이드
window.onload = function(){
  // 경로로 적어주어야 함
  let pic = ["images/cup-1.jpg", "images/cup-2.jpg", "images/cup-3.jpg"];
  
  let picInx = 0;

  myPicture();

  function myPicture(){
    document.getElementById("pic").src = pic[picInx];
    picInx++;

    if(picInx == pic.length){
      picInx = 0;
    }
    setTimeout(myPicture, 2000);
  }
}
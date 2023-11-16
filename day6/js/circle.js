// class_circle.html

// 원의 둘레와 넓이
// 원의 둘레 = 2rπ , 원의 넓이 = πr^2
function Circle(radius){
  this.radius = radius;

  // 원의 둘레 함수
  this.length = function(){
    let len = this.radius * 2 * Math.PI;
    document.write("원의 둘레 : " + len.toFixed(2) + "cm<br>");
  }

  this.area = function(){
    let ar = this.radius * this.radius * Math.PI;
    document.write("원의 넓이 : " + ar.toFixed(2) + "cm<sup>2</sup><br>");
  }
}

// 원 1개 생성
let circle1 = new Circle(3);
circle1.length();
circle1.area();
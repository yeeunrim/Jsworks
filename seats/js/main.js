// main.html
// 입장객 수에 따른 행과 열, 줄 수 계산

// 고객의 수 = 21
// 열 = 5
// 줄 
let customer, colNum, rowNum;

customer = 21;
colNum = 5;

// Key Point ! 나머지의 유무 (줄 수)
if(customer % colNum === 0){
  rowNum = customer / colNum; 
} else {
  rowNum = parseInt(customer / colNum) + 1;
}

// 좌석 번호 배치
document.write("<table>");
for(let i=0; i<rowNum; i++){ // 행
  document.write("<tr>");
  for(let j=1; j<=colNum; j++){ // 열
    let seatNum = colNum * i + j;
    // document.write(seatNum + " ");
    if(seatNum > customer) break;
    document.write("<td>좌석" + seatNum + "</td>");
  }
  document.write("</tr>");
}
document.write("</table>");
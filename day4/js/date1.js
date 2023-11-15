// date1.html

// Date 객체 (날짜와 시간)

const NOW = new Date(); // 객체 생성

document.write("현재 년도 : " + NOW.getFullYear() + "<br>");
document.write("현재 월 : " + (NOW.getMonth() + 1) + "<br>");
document.write("현재 일 : " + NOW.getDate() + "<br>");
document.write("결과 : " + NOW.getFullYear() + "년 " 
  + (NOW.getMonth() + 1) + "월 " 
  + NOW.getDate() + "일<br>");

document.write("-----------------------------------------------<br>");

document.write("현재 시간 : " + NOW.getHours() + "<br>");
document.write("현재 분 : " + NOW.getMinutes() + "<br>");
document.write("현재 초 : " + NOW.getSeconds() + "<br>");
document.write("결과 : " + NOW.getHours() + "시 " + NOW.getMinutes() + "분 " + NOW.getSeconds() + "초<br>");

document.write("-----------------------------------------------<br>");

// 현재까지의 시간 측정(1970.1.1 자정부터 밀리초로 반환)
document.write("현재까지의 시간 : " + (NOW.getTime()/1000) + "<br>");

document.write("날(일)로 환산 : " + Math.floor((NOW.getTime()/(24*60*60*1000))) + "<br>");

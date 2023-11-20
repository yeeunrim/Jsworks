//학생 5명의 국어와 수학점수 통계
let score = [
  [80, 70],
  [90, 60],
  [70, 70],
  [100, 90],
  [83, 55]
]

/*let kor_sum = 0;
let math_sum = 0;
let kor_avg, math_avg;

//과목별 점수 합계
//국어 합계 - 1열, score[i][0]
//수학 합계 - 2열, score[i][1]
for(let i=0; i<score.length; i++){
  kor_sum += score[i][0];
  math_sum += score[i][1];
}

//평균 계산
kor_avg = kor_sum / score.length;
math_avg = math_sum / score.length;

document.write("국어 합계: " + kor_sum + "<br>")
document.write("수학 합계: " + math_sum + "<br>")
document.write("국어 평균: " + kor_avg + "<br>")
document.write("수학 평균: " + math_avg + "<br>")*/

//변수를 배열로 선언
let sumScore = [0, 0];  //국어합계, 수학합계
let avgScore = [0.0, 0.0]; //국어평균, 수학평균

for(let i=0; i<score.length; i++){
  sumScore[0] += score[i][0];
  sumScore[1] += score[i][1];
}
avgScore[0] = sumScore[0] / score.length;
avgScore[1] = sumScore[1] / score.length;

document.write("국어 합계: " + sumScore[0] + "<br>")
document.write("수학 합계: " + sumScore[1] + "<br>")
document.write("국어 평균: " + avgScore[0] + "<br>")
document.write("수학 평균: " + avgScore[1] + "<br>")
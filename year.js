function solution(a, b) {
  let answer = "";
  let day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let date = new Date(2016, a - 1, b);
  answer = day[date.getDay()];

  return answer;
}

console.log(solution(5, 24));

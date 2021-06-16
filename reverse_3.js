function solution(n) {
  let answer = 0;

  answer = n.toString(3);
  answer = answer.split("");
  answer = answer.reverse();
  answer = answer.join("");
  answer = parseInt(answer, 3);

  return answer;
}

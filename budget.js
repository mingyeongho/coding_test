function solution(d, budget) {
  let answer = 0;

  d.sort((a, b) => a - b);
  let sum = 0;
  d.map((v) => {
    if (sum + v <= budget) {
      sum += v;
      answer++;
    }
  });

  return answer;
}

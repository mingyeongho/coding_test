function solution(a, b) {
  var answer = 0;

  for (let i in a) {
    answer += a[i] * b[i];
  }

  return answer;
}

// 무친 답.
function solution(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}

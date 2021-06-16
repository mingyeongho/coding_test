function solution(a, b) {
  let answer = 0;

  if (a === b) {
    return a;
  } else {
    let max = a < b ? b : a;
    let min = a < b ? a : b;

    for (let i = min; i <= max; i++) {
      answer += i;
    }

    return answer;
  }
}

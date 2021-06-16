function solution(numbers, target) {
  let answer = 0;

  const recur = (idx, sum) => {
    if (idx === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }
    recur(idx + 1, sum + numbers[idx]);
    recur(idx + 1, sum - numbers[idx]);
  };
  recur(0, 0);

  return answer;
}

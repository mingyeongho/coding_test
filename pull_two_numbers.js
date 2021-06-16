function solution(numbers) {
  let answer = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }

  answer.sort((a, b) => a - b);

  let idx = 0;
  while (idx < answer.length) {
    if (answer[idx] === answer[idx + 1]) {
      answer.splice(answer.indexOf(answer[idx + 1]), 1);
      continue;
    }
    idx++;
  }

  return answer;
}

// 무친 답.
function solution(numbers) {
  const temp = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      temp.push(numbers[i] + numbers[j]);
    }
  }

  const answer = [...new Set(temp)];

  return answer.sort((a, b) => a - b);
}

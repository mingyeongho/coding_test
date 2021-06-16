function solution(answers) {
  let answer = [];
  let res = [0, 0, 0];

  let first = [1, 2, 3, 4, 5];
  let second = [2, 1, 2, 3, 2, 4, 2, 5];
  let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; i < answers.length; i++) {
    if (first[i % first.length] === answers[i]) {
      res[0]++;
    }
    if (second[i % second.length] === answers[i]) {
      res[1]++;
    }
    if (third[i % third.length] === answers[i]) {
      res[2]++;
    }
  }
  let max = Math.max(...res);

  for (let i = 0; i < res.length; i++) {
    if (res[i] === max) {
      answer.push(i + 1);
    }
  }

  return answer;
}

function solution(lottos, win_nums) {
  let answer = [];

  let rank = [6, 6, 5, 4, 3, 2, 1];

  let min = 0;
  let zero = 0;
  for (let i of lottos) {
    if (i === 0) {
      zero++;
      continue;
    }
    if (win_nums.includes(i)) {
      min++;
    }
  }
  let max = min + zero;

  answer.push(rank[max]);
  answer.push(rank[min]);

  return answer;
}

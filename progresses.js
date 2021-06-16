function solution(progresses, speeds) {
  let answer = [];

  let temp = progresses.map((val, idx) => {
    let i = 0;
    while (val < 100) {
      val += speeds[idx];
      i++;
    }
    return i;
  });

  let a = temp[0];
  let cnt = 1;
  for (let i = 1; i < temp.length; i++) {
    if (a < temp[i]) {
      answer.push(cnt);
      a = temp[i];
      cnt = 1;
      continue;
    }
    cnt++;
  }
  answer.push(cnt);

  return answer;
}

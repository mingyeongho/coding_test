function solution(N, stages) {
  let user = stages.length;
  let stk = [];

  for (let i = 1; i <= N; i++) {
    let len = stages.filter((v) => v === i).length;
    if (len === 0) {
      stk.push({ idx: i, ratio: 0 });
    } else {
      stk.push({ idx: i, ratio: len / user });
      user -= len;
    }
  }

  stk.sort((a, b) => {
    if (a.ratio === b.ratio) {
      return a.idx - b.idx;
    } else {
      return b.ratio - a.ratio;
    }
  });

  return stk.map((v) => v.idx);
}

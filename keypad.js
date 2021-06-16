function solution(numbers, hand) {
  var answer = "";
  let pad = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["*", "0", "#"],
  ];
  let cur_left = "*";
  let cur_right = "#";
  for (let i in numbers) {
    if (numbers[i] === 0 || numbers[i] % 3 === 2) {
      let nrow, ncol;
      let lrow, lcol;
      let rrow, rcol;
      let left_sub, right_sub;
      for (let r in pad) {
        for (let c in pad[r]) {
          if (numbers[i].toString() === pad[r][c]) {
            nrow = r; // 1
            ncol = c; // 1
          }
          if (cur_left.toString() === pad[r][c]) {
            lrow = r; // 1
            lcol = c; // 0
          }
          if (cur_right.toString() === pad[r][c]) {
            rrow = r; // 0
            rcol = c; // 2
          }
        }
      }
      left_sub = Math.abs(lrow - nrow) + Math.abs(lcol - ncol); // 1
      right_sub = Math.abs(rrow - nrow) + Math.abs(rcol - ncol); // 2
      if (left_sub > right_sub) {
        answer += "R";
        cur_right = numbers[i];
      } else if (left_sub < right_sub) {
        cur_left = numbers[i];
        answer += "L";
      } else {
        if (hand === "right") {
          answer += "R";
          cur_right = numbers[i];
        } else {
          answer += "L";
          cur_left = numbers[i];
        }
      }
    } else if (numbers[i] % 3 === 0) {
      answer += "R";
      cur_right = numbers[i];
    } else if (numbers[i] % 3 === 1) {
      answer += "L";
      cur_left = numbers[i];
    }
  }

  return answer;
}

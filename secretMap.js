function solution(n, arr1, arr2) {
  let answer = Array.from(Array(n), () => Array());

  let firstMap = [];
  let secondMap = [];

  arr1.map((val, idx) => {
    let row = val.toString(2);
    row = row.split("");
    let row_length = row.length;
    if (row_length < n) {
      for (let i = 1; i <= n - row_length; i++) {
        row.unshift("0");
      }
    }
    firstMap.push(row);
  });

  arr2.map((val, idx) => {
    let row = val.toString(2);
    row = row.split("");
    let row_length = row.length;
    if (row_length < n) {
      for (let i = 1; i <= n - row_length; i++) {
        row.unshift("0");
      }
    }
    secondMap.push(row);
  });

  for (let i = 0; i < firstMap.length; i++) {
    for (let j = 0; j < firstMap.length; j++) {
      if (firstMap[i][j] === "1" || secondMap[i][j] === "1") {
        answer[i][j] = "#";
      } else {
        answer[i][j] = " ";
      }
    }
    answer[i] = answer[i].join("");
  }

  return answer;
}

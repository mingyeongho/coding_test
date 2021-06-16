function solution(arr) {
  let answer = [];

  let num = arr[0];
  answer.push(num);
  for (let i = 1; i < arr.length; i++) {
    if (num === arr[i]) continue;
    num = arr[i];
    answer.push(num);
  }

  return answer;
}

function solution2(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}

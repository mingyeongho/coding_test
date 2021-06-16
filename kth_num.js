function solution(array, commands) {
  let answer = [];

  for (let i = 0; i < commands.length; i++) {
    let first = commands[i][0];
    let last = commands[i][1];
    const arr = array.slice(first - 1, last).sort(function (a, b) {
      if (a > b) return 1;
      if (a === b) return 0;
      if (a < b) return -1;
    });
    answer.push(arr[commands[i][2] - 1]);
  }

  return answer;
}

// 무친 답. (구조 분해 할당 사용)
function solution2(array, commands) {
  return commands.map((command) => {
    const [sPosition, ePostion, position] = command;
    const newArray = array
      .filter(
        (value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePostion - 1
      )
      .sort((a, b) => a - b);

    return newArray[position - 1];
  });
}

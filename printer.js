function solution(priorities, location) {
  let answer = 0;

  while (priorities.length > 0) {
    // 뒤의 수가 더 클 경우
    if (priorities.some((x) => x > priorities[0])) {
      priorities.push(priorities.shift());
      // 찾고자 하는 수가 맨 앞에 있을 경우 맨 뒤로 이동
      if (location === 0) {
        location += priorities.length - 1;
      } else {
        // 찾고자 하는 수가 맨 앞이 아닐 경우 맨 앞의 수가 맨 뒤로 이동하기 때문에 나머지는 앞으로 이동
        location -= 1;
      }
    } else {
      // 맨 앞의 수가 가장 클 경우
      answer += 1; // 이미 리턴된 수가 있으므로 answer++;
      priorities.shift(); // 리턴되었으니 shift()
      if (location === 0) {
        break;
      } else {
        location -= 1;
      }
    }
  }

  return answer;
}

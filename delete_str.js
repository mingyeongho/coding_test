/*
function solution(s) {
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      s = s.replace(s.substr(i, 2), "");
      if (i === 0) {
        i = -1;
      } else {
        i -= 2;
      }
    }
  }

  return (answer = s.length === 0 ? 1 : 0);
}
-> 시간초과 발생*/

// -> stack 사용
function solution(s) {
  let answer = 0;

  let stack = [s[0]];
  for (let i = 1; i < s.length; i++) {
    if (stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return (answer = stack.length === 0 ? 1 : 0);
}

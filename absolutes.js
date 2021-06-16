function solution(absolutes, signs) {
  var answer;

  for (let i in signs) {
    if (signs[i] === false) {
      absolutes[i] *= -1;
    }
  }

  answer = absolutes.reduce((acc, cur) => (acc += cur));

  return answer;
}

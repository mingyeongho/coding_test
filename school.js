function solution(n) {
  let answer = 0;

  let str = n.toString(2);
  str = str.split("");

  str.filter((val) => {
    if (val === "1") {
      answer++;
    }
  });

  console.log(answer);
  return answer;
}

solution(12);

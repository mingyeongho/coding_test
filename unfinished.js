const participant = ["leo", "kiki", "eden", "kiki"]; // 마라톤에 참여한 선수들의 이름이 담긴 배열
const completion = ["eden", "kiki", "leo"]; // 완주한 선수들의 이름이 담긴 배열

// 완주하지 못한 선수들의 이름을 return
function solution(participant, completion) {
  let answer = "";

  participant = participant.sort();
  completion = completion.sort();

  for (let i in participant) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      break;
    }
  }
  return answer;
}

console.log(solution(participant, completion));

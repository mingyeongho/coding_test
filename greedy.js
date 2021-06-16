function solution(n, lost, reserve) {
  let answer = 0;
  let $lost = lost.sort();
  let $reserve = reserve.sort();

  for (let i = 0; i < $lost.length; i++) {
    let num = $lost[i];
    if ($reserve.includes(num)) {
      $lost.splice($lost.indexOf(num), 1);
      $reserve.splice($reserve.indexOf(num), 1);
      i--;
    }
  }

  answer = n - $lost.length;

  for (let i = 0; i < $lost.length; i++) {
    let num = $lost[i];
    if ($reserve.includes(num - 1) || $reserve.includes(num + 1)) {
      if ($reserve.includes(num - 1)) {
        $reserve.splice($reserve.indexOf(num - 1), 1);
      } else {
        $reserve.splice($reserve.indexOf(num + 1), 1);
      }
      answer++;
    }
  }

  return answer;
}

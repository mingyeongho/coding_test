// 가로가 w, 세로가 h인 사각형이 각각 1 x 1 크기의 사각형으로 채워져있을 때
// w * h 크기의 사각형을 대각선 방향으로 자르면 몇개의 정사각형이 만들어 지느냐.

// 1. 유클리드 호제법을 사용한 방법
function solution(w, h) {
  const gcd = (a, b) => {
    return b === 0 ? a : gcd(b, a % b);
  };
  let max = w < h ? h : w;
  let min = w < h ? w : h;

  return w * h - (w + h - gcd(max, min));
}
// 2. 기울기를 이용한 방법
function solution2(w, h) {
  const slope = h / w; // 12 / 8
  let result = 0;

  for (let i = 1; i <= w; i++) {
    result += Math.ceil(slope * i);
    // Math.ceil = 올림
  }

  return (w * h - result) * 2;
}

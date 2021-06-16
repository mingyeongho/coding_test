function solution(nums) {
  let answer = 0;

  const isPrime = (n) => {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  };
  /* Math.sqrt()를 이용한 소수판별
  const isPrime = (n) => {
      for (let i = 2; i <= Math.sqrt(n); i++) {
          if (n % i === 0) {
              return false;
          }
      }
      return true;
  }*/

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) {
          answer++;
        }
      }
    }
  }

  return answer;
}

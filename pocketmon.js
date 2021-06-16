function solution(nums) {
  let answer = 0;

  let n = nums.length / 2;
  let arr = Array.from(new Set(nums));
  let arr_length = arr.length;

  if (n <= arr_length) return n;
  else return arr_length;
}

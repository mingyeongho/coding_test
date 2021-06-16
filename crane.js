const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

const moves = [1, 5, 3, 5, 1, 2, 1, 4];

const result = []; // 4 3 1 1 3 2 null 4 -> 4 2 4

function solution(board, moves) {
  // 2차원 격자: board, 크레인을 작동시킨 위치: moves
  let answer = 0; // 터트려져 사라진 인형의 개수: answer

  for (let j = 0; j < moves.length; j++) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][moves[j] - 1] != 0) {
        result.push(board[i][moves[j] - 1]);
        if (result[result.length - 1] == result[result.length - 2]) {
          result.pop();
          result.pop();
          answer += 2;
        }
        board[i][moves[j] - 1] = 0;
        break;
      }
    }
  }

  return answer;
}

console.log(solution(board, moves));

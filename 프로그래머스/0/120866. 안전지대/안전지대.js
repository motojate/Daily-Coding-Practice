function solution(board) {
    var answer = 0;
    const dangerousArea = [[1, 0], [0, 1], [-1, -1], [1, 1], [-1, 0], [0, -1], [-1, 1], [1, -1]];
    
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            if(board[i][j] === 1) {
                dangerousArea.forEach(v => {
                    const [x, y] = v;
                    if(x + i >= 0 && x + i < board.length && y + j >= 0 && y + j < board[i].length) {
                        const boardScore = board[i + x][j + y];
                        board[i + x][j + y] = boardScore === 0 ? 2 : boardScore;
                    }
                })
            }
        }
    }
    board.forEach(val => val.forEach(v => {
        if(v === 0) answer++;
    }))
    return answer;
}
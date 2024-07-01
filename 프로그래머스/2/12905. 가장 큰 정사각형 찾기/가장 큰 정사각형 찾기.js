function solution(board) {
    const zRow = [];
    board.forEach(v => board.push(v[0]));
    let answer = Math.max(...board[0], ...zRow);
    
    for(let i = 1; i < board.length; i++) {
        for(let j = 1; j < board[i].length; j++) {
            if(board[i][j] === 0) continue;
            
            board[i][j] = Math.min(board[i - 1][j], board[i][j - 1], board[i - 1][j - 1]) + 1;
            
            answer = Math.max(answer, board[i][j]);
        }
    }
    
    return answer * answer;
}

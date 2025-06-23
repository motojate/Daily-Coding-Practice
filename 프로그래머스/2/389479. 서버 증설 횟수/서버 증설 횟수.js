function solution(players, m, k) {
    const n = players.length;
    const activeServerState = new Array(n).fill(0);
    let answer = 0;

    for (let i = 0; i < n; i++) {
        const player = players[i];
        const currentServerState = activeServerState[i];
        
        const storage = m - 1;
        
        const overPlayer = player - storage;
        
        if (overPlayer > currentServerState) {
            const newServerCount = Math.ceil((overPlayer - currentServerState) / m);

            for (let j = 0; j < k; j++) {
                if (i + j < n) {
                    activeServerState[i + j] += newServerCount * m;
                }
            }

            answer += newServerCount;
        }
    }

    return answer;
}
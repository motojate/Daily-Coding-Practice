function solution(players, callings) {
    const map = new Map();
    
    for(let i = 0; i < players.length; i++) {
        map.set(players[i], i);
    }
    
    for(const calling of callings) {
        const i = map.get(calling);
        swap(players, i, i - 1);
        map.set(calling, i - 1);
        map.set(players[i], i);
    }
    return players;
}

const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
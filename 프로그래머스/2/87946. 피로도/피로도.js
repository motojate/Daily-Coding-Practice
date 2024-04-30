function solution(k, dungeons) {
    var answer = -1;
    dungeons = dungeons.map(v => [...v, false]);
   
    const DFS = (hp, round) => {
        for(const dungeon of dungeons) {
            if(!dungeon[2] && dungeon[0] <= hp) {
                dungeon[2] = true;
                DFS(hp - dungeon[1], round + 1);
                dungeon[2] = false;
            }
        }
        answer = Math.max(round, answer);
    }
    
    DFS(k, 0);
    
    return answer;
}
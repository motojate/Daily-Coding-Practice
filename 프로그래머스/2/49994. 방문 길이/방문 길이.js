function solution(dirs) {
    const moveMap = new Map();
    let count = 0;
    const move = {
        'R': [1, 0],
        'L': [-1, 0],
        'U': [0, 1],
        'D': [0, -1]
    }
  
    let [x, y] = [0, 0];
    
    for(const dir of dirs) {
        const [moveX, moveY] = [x + move[dir][0], y + move[dir][1]];
        if(moveX > 5 || moveY > 5 || moveX < -5 || moveY < -5) continue;
        
        const key1 = "" + x + y + moveX + moveY;
        const key2 = "" + moveX + moveY + x + y;
        
        if(!moveMap.get(key1) && !moveMap.get(key2)) count++;
        
        moveMap.set(key1, true);
        moveMap.set(key2, true)
        x = moveX;
        y = moveY;
    }
    
    return count;
}


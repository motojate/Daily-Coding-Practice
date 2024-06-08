function solution(park, routes) {
    const w = park[0].length;
    const h = park.length;
    const direction = {
        'W': [0, -1],
        'E': [0, 1],
        'N': [-1, 0],
        'S': [1, 0]
    }
    let position = [0, 0];
    for(let i = 0; i < park.length; i++) {
        if(park[i].includes('S')) {
            position[0] = i;
            position[1] = park[i].indexOf('S');
            break;
        }
    }

    
    for(const route of routes) {
        const [d, count] = route.split(' ');
        const [y, x] = direction[d];
        const [curY, curX] = position;
        
        for(let i = 0; i < count; i++) {
            const newX = position[1] + x;
            const newY = position[0] + y;
            
            if(newX < 0 || newY < 0 || newX >= w || newY >= h || park[newY][newX] === 'X') {
                [position[0], position[1]] = [curY, curX];
                break;
            }
            [position[0], position[1]] = [newY, newX];
        }
    }
    
    return position;
}
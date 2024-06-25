function solution(routes) {
    routes.sort((a, b) => a[0] - b[0]);
    let answer = 0;
    let pos = -30001;
    for(const route of routes) {
        const [x, y] = route;
        if(x > pos) {
            answer++;
            pos = y;
        } else {
            if(y < pos) pos = y;
        }
    }

    return answer;
}
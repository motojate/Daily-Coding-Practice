function solution(cards1, cards2, goal) {
    let c1Idx = 0, c2Idx = 0;
    for(let i = 0; i < goal.length; i++) {
        const key = goal[i];
        if(cards1[c1Idx] === key) c1Idx++;
        else if(cards2[c2Idx] === key) c2Idx++;
        else return "No";
    }
    return "Yes";
}
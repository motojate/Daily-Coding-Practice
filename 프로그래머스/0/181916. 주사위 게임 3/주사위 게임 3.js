function solution(a, b, c, d) {
    const map = new Map();
    map.set(a, 1);
    map.set(b, map.get(b) ? map.get(b) + 1 : 1);
    map.set(c, map.get(c) ? map.get(c) + 1 : 1);
    map.set(d, map.get(d) ? map.get(d) + 1 : 1);
    const answer = cal([...map.entries()].sort((a, b) => {
        if(b[1] - a[1] > 0) return 1;
        if(a[1] - b[1] > 0) return -1;
        if(a[0] - b[0] > 0) return -1;
    }));
    return answer;
}

const cal = (arr) => {
    switch(arr.length) {
        case 1:
            return 1111 * arr[0][0];
        case 2: {
            if(arr[0][1] === 2) return (arr[0][0] + arr[1][0]) * (arr[0][0] - arr[1][0]);
            else return (10 * arr[0][0] + arr[1][0]) ** 2;
        }
        case 3: return arr[1][0] * arr[2][0];
        case 4:
            return arr[3][0];
    }
}
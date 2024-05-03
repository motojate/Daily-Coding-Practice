function solution(arr) {
    var answer = [0, 0];

    const checkS = (x, y, n) => {
        if(n === 1) return answer[arr[x][y]]++;
        
        let flag = true;
        for(let i = x; i < x + n; i++) {
            for(let j = y; j < y + n; j++) {
                if(arr[x][y] !== arr[i][j]) {
                    flag = false;
                    break;
                }
            }
        }  
        
        if(flag) return answer[arr[x][y]]++;
        
        n /= 2;
        
        checkS(x, y, n);
        checkS(x + n, y, n);
        checkS(x, y + n, n);
        checkS(x + n, y + n, n);
    }
    
    checkS(0, 0, arr.length);
    
    return answer;
}
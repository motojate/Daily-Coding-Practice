function solution(arr) {
    let answer = 0;
    const funcTry = (array) => {
        answer++;
        const newArr = generateArr(array);
        
        let flag = true;
        for(let i = 0; i < array.length; i++) {
            if(array[i] !== newArr[i]) {
                flag = false;
                break;
            }
        }
        if(flag) return answer;
        else return funcTry(newArr);
    }
    return funcTry(arr) - 1;
}

const generateArr = (arr) => {
    return arr.map(v => {
        if(v >= 50 && v % 2 === 0) return v / 2;
        if(v < 50 && v % 2 === 1) return v * 2 + 1;
        return v;
    });
}
function solution(arr) {
    let answer = arr.shift();
  
    while(arr.length > 0) {
        console.log(answer)
        const compareNum = arr.shift();
        const gcdNum = gcd(answer, compareNum);
        answer = answer * compareNum / gcdNum;
    }
    return answer;
}

const gcd = (a, b) => {
        if(a % b === 0) return b
        else return gcd(b, a % b)
    }
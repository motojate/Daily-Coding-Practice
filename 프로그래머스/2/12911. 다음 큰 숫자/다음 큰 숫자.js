function solution(n) {
    var answer = 0;
    const realNumBinaryOneCount =  n.toString(2).replaceAll("0", '').length;
    while(1) {
        n++;
        const oneCountNewNum = n.toString(2).replaceAll("0", '').length;
        if(realNumBinaryOneCount === oneCountNewNum) {
            answer = n;
            break;
        }
    }
    return answer;
}
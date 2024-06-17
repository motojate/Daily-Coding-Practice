function solution(numbers) {
    const answer = [];
    
    const changeZeroOne = (arr, i) => {
        [arr[i], arr[i + 1]] = ['1', '0'];
    }
    
    for(const number of numbers) {
        if(number % 2 === 0) answer.push(number + 1);
        else {
            const convertNum = [...number.toString(2)];
            let zeroIdx = convertNum.lastIndexOf('0');
            
            if(zeroIdx === -1) {
                convertNum.unshift('0');
                zeroIdx = 0;
            }
            
            changeZeroOne(convertNum, zeroIdx);
            answer.push(parseInt(convertNum.join(''), 2)); 
            
        }
    }
    return answer;
}
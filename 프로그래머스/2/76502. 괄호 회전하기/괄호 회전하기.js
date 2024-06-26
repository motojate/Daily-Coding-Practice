function solution(s) {
    // if(s.length % 2 === 1) return 0;
    let answer = 0;
    const mapperArray = ['{', '(', '['];
    const mapper = {
        '{': '}',
        '(': ')',
        '[': ']'
    };
    const stack = [];
    let newStr = s;
    for(let i = 0; i < s.length; i++) {
        const strBuffer = [...newStr];
        while(strBuffer.length > 0) {
            if(strBuffer.length === 1 && stack.length === 0) break;
            const peak = strBuffer.pop();
            if(mapperArray.includes(peak)) {
                if(stack.length === 0 || mapper[peak] !== stack.pop()) break;
            } else stack.push(peak);
        }
        if(strBuffer.length === 0 && stack.length === 0) answer++;
        newStr = convertStr(newStr);
    }

    return answer;
}

const convertStr = (str) => {
    return `${str.slice(1)}${str[0]}`
}
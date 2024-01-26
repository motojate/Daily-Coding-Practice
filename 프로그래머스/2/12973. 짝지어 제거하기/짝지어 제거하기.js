function solution(s) {
    const buffer = [];
    for(const str of s) {
        if(str === buffer[buffer.length - 1]) buffer.pop();
        else buffer.push(str);
    }
    
    return buffer.length === 0 ? 1 : 0;
}
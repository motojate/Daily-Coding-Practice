function solution(s){
    const buffer = [];
    for(const str of s) {
        if(str === "(") buffer.push(str);
        else {
            if(buffer.length === 0) return false;
            else buffer.pop();
        }
    }
    return buffer.length === 0;
}
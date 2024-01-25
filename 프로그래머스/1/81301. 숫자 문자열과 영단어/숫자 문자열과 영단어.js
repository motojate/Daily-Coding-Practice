function solution(s) {
    const numObj = {
        "zero": 0,
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9
    };
    Object.entries(numObj).map(([key, value]) => {
        if(s.includes(key)) s = s.replaceAll(key, value);
    })
    
    var answer = Number(s);
    return answer;
}
function solution(myString) {
    const regex = /[a-l]/g;
    return myString.replace(regex, 'l');
}
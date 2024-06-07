function solution(new_id) {
    let answer = step1(new_id);
    answer = step2(answer);
    answer = step3(answer);
    answer = step4(answer);
    answer = step5(answer);
    answer = step6(answer);
    answer = step7(answer);
    return answer;
}

const step1 = (str) => str.toLowerCase();

const step2 = (str) => {
    const regex = /[^a-z0-9-_.]/g;
    return str.replace(regex, '');
}

const step3 = (str) => {
    const newStr = str.replaceAll('..', '.');
    if(newStr === str) return str;
    else return step3(newStr);
}

const step4 = (str) => {
    if(str[0] === '.') str = str.replace('.', '');
    if(str[str.length - 1] === '.') str = str.slice(0, str.length - 1);
    return str;
}

const step5 = (str) => {
    return str === '' ? 'a' : str;
}

const step6 = (str) => {
    if(str.length >= 16) str = str.slice(0, 15);
    str = step4(str);
    return str;
}

const step7 = (str) => {
    while(str.length < 3) str += str[str.length - 1];
    return str;
}
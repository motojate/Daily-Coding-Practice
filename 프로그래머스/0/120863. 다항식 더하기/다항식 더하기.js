function solution(polynomial) {
    let xCount = 0;
    let cCount = 0;
    for(const str of polynomial.split(' + ')) {
        if(str.includes('x')) xCount += str.replace('x', '') === '' ? 1 : +str.replace('x', '');
        else cCount += +str;
    }
    
    return `${xCount > 1 ? xCount.toString() + 'x' : xCount === 1 ? 'x' : ''}${cCount && xCount ? ' + ' + cCount : xCount === 0 ? cCount.toString() : ''}`;
}
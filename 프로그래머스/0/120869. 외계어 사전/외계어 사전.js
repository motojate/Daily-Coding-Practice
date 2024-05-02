function solution(spell, dic) {
    var answer = 2;
    for(const str of dic) {
        let flag = true;
        for(const spe of spell) {
            if(!str.includes(spe)) flag = false;
        }
        if(flag) return 1;
    }
    return answer;
}
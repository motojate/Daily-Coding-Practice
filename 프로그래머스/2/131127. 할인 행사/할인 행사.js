function solution(want, number, discount) {
    const mapper = new Map();
    let day = 0;
    let answer = 0;
    
    discount.slice(0, 10).forEach((v) => {
        const vCount = mapper.get(v);
        if(vCount) mapper.set(v, vCount + 1);
        else mapper.set(v, 1);
    })
    
    const setMapper = (prevItem, nextItem) => {
        mapper.set(prevItem, mapper.get(prevItem) - 1);
        mapper.set(nextItem, mapper.get(nextItem) ? mapper.get(nextItem) + 1 : 1);
    }
    
    for(let i = 10; i <= discount.length; i++) {
        let flag = true;
        for(let j = 0; j < want.length; j++) {
            if((mapper.get(want[j]) ?? 0) < number[j]) flag = false;
        }
        if(flag) answer++;
        
        setMapper(discount[day++], discount[i]);
    }
    return answer;
}

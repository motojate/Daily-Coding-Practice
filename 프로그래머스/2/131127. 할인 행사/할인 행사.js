function solution(want, number, discount) {
    const discountMap = new Map();

    let day = 0;
    let answer = 0;
    
    discount.slice(0, 10).forEach((v) => {
        const vCount = discountMap.get(v);
        if(vCount) discountMap.set(v, vCount + 1);
        else discountMap.set(v, 1);
    })
    
    const setMapper = (prevItem, nextItem) => {
        discountMap.set(prevItem, discountMap.get(prevItem) - 1);
        discountMap.set(nextItem, discountMap.get(nextItem) ? discountMap.get(nextItem) + 1 : 1);
    }
    
    for(let i = 10; i <= discount.length; i++) {
        let flag = true;
        for(let j = 0; j < want.length; j++) {
            if((discountMap.get(want[j]) ?? 0) < number[j]) flag = false;
        }
        if(flag) answer++;
        
        setMapper(discount[day++], discount[i]);
    }
    return answer;
}

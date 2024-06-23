function solution(friends, gifts) {
    const giftArr = Array.from({ length: friends.length }, () => Array.from({ length: friends.length }).fill(0));
    
    const giftCospi = new Map();
 
    const answer = [];
    
    for(const gift of gifts) {
        const [a, b] = gift.split(' ');
        
        const aIdx = friends.indexOf(a);
        const bIdx = friends.indexOf(b);
        
        giftArr[aIdx][bIdx]++;
        
        const aCospi = giftCospi.get(a) ?? 0;
        const bCospi = giftCospi.get(b) ?? 0;
        giftCospi.set(a, aCospi + 1);
        giftCospi.set(b, bCospi - 1);
    }
    
    for(let i = 0; i < friends.length; i++) {
        let gift = 0;
        for(let j = 0; j < friends.length; j++) {
            if(i === j) continue;
            if(giftArr[i][j] > giftArr[j][i]) gift++;
            
            if(giftArr[i][j] === giftArr[j][i]) {
                const iCospi = giftCospi.get(friends[i]) ?? 0;
                const jCospi = giftCospi.get(friends[j]) ?? 0;
                if(iCospi > jCospi) gift++;
            }
        }
        answer.push(gift);
    }
    
    return Math.max(...answer);
}
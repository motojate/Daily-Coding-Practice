function solution(str1, str2) {
    const regex = /^[a-z]+$/;
    const a1 = [];
    const a2 = [];
    
    for(let i = 0; i < str1.length - 1; i++) {
        const str = (str1[i] + str1[i + 1]).toLowerCase();
        if(regex.test(str)) a1.push(str);
    }
    
    for(let i = 0; i < str2.length - 1; i++) {
        const str = (str2[i] + str2[i + 1]).toLowerCase();
        if(regex.test(str)) a2.push(str);
    }
    
    const intersection = (a, b) => {
        if(a.length === 0 && b.length === 0) return 1;
        const arr = [];
        const bArr = [...b];
        for(const el of a) {
            if(bArr.includes(el)) {
                arr.push(el);
                bArr.splice(bArr.indexOf(el), 1);
            }
        }
        
        return arr.length;
    }
    
    const union = (a, b) => {
        if(a.length === 0 && b.length === 0) return 1;
        const bArr = [...b];
        for(const el of a) {
            if(bArr.includes(el)) bArr.splice(bArr.indexOf(el), 1);
        }
        return [...a, ...bArr].length;
    }
    
    return Math.floor((intersection(a1, a2) / union(a1, a2) * 65536));
}
function solution(word) {
    const words = ['A', 'E', 'I', 'O', 'U'];
    const bucket = [];
    const dfs = (str) => {
        if(str.length > 5) return;
        
        bucket.push(str);
        
        for(const w of words) {
            dfs(str + w);
        }
    }
    dfs("");
    return bucket.indexOf(word);
}
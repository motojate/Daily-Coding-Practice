function solution(record) {
    const answer = [];
    
    const nameMap = new Map();
    
    for(const rcd of record) {
        const [msg, uid, name] = rcd.split(' ');
        if(msg === 'Enter' || msg === 'Change') nameMap.set(uid, name);
    }
    
    for(const rcd of record) {
        const [msg, uid] = rcd.split(' ');
        if(msg === 'Change') continue;
        const name = nameMap.get(uid);
        if(msg === 'Enter') answer.push(`${name}님이 들어왔습니다.`);
        else answer.push(`${name}님이 나갔습니다.`)
    }
    
    return answer;
}
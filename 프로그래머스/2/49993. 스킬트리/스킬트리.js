function solution(skill, skill_trees) {
    let answer = 0;
    
    for(const skill_tree of skill_trees) {
        const stack = [];
        for(const sk of skill) {
            stack.push(skill_tree.indexOf(sk));
        }
        if(stack.filter(v => v !== -1).length === 0) {
            answer++;
            continue;
        }
        
        let temp = 0;
        let flag = true;
        for(let i = 0; i < stack.length; i++) {
            if(stack.slice(i, stack.length).filter(v => v !== -1).length === 0) break;
            if(stack[i] < temp) {
                flag = false;
                break;
            }
            temp = stack[i];
        }
        
        if(flag) answer++;
    }
   
    return answer;
}
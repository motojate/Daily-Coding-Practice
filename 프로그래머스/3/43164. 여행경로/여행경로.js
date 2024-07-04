function solution(tickets) {
    // 1. 그래프를 저장하기 위하여 Map() 객체 생성.
    const graph = new Map();
    const answer = [];

    // 2. 그래프 구성.
    for(const [from, to] of tickets) {
        if(!graph.has(from)) graph.set(from, []);
        graph.get(from).push(to);
    }
    
    // 3-1. dfs 함수 정의. from은 출발지, path는 현재까지의 경로.
    const dfs = (from, path) => {
        
        // 3-2. 현재 경로에 from을 추가.
        path.push(from);
        
        if(!graph.has(from) || graph.get(from).length === 0) {
            // 3-3. 더 이상 갈 수 없을 때 경로 저장. 이 때 path는 계속 사용하므로, 복사본을 저장.
            
            const clonePath = [...path];
            
            if(answer.length === 0) answer.push(clonePath);
            else {
                if(clonePath.length > answer[0].length) {
                    answer.pop();
                    answer.push(clonePath);
                }
                if(answer[0].length === clonePath.length) answer.push(clonePath);
            }
        } else {
            // 3-4. 현재 노드에서 갈 수 있는 모든 노드를 탐색.
            const toList = graph.get(from);
            
            for(let i = 0; i < toList.length; i++) {
                const to = toList[i];
                
                // 3-5. 현재 사용한 티켓(경로) 제거.
                toList.splice(i, 1);
                
                // 3-6. 다음 목적지를 재귀적으로 탐색.
                dfs(to, path);
                
                // 3-7. 다음 탐색을 위하여 티켓 반환을 하는 백트래킹 작업 실행.
                toList.splice(i, 0, to);
            }
        }
        
        // 3-8. 더 이상 갈 곳이 없다면, 이후 탐색을 위한 현재 경로를 제거 (백트래킹).
        path.pop();
    }
    
    // 4. dfs 함수 실행. 시작 위치는 ICN.
    dfs("ICN", []);
    
    return answer.sort()[0];
}
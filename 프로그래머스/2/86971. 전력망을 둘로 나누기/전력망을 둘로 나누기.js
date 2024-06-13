function solution(n, wires) {
    const answer = [];
    
    const generateGraph = (edges) => {
        const graph = Array.from({ length: n + 1 }, () => []);
        for(const [u, v] of edges) {
            graph[u].push(v);
            graph[v].push(u);
        }
        
        const visited = Array.from({ length: n + 1 }).fill(false);
        const components = [];
        
        const dfs = (node, component) => {
            component.push(node);
            visited[node] = true;
            for(const neighbor of graph[node]) {
                if(!visited[neighbor]) dfs(neighbor, component);
            }
        }
        
        for(let i = 1; i <= n; i++) {
            if(!visited[i]) {
                const component = [];
                dfs(i, component);
                components.push(component);
            }
        }
        
        return components;
    }
    
    for(let i = 0; i < wires.length; i++) {
        const components = generateGraph(wires.filter((_, j) => i !== j));
        const [a, b] = components;
        answer.push(Math.abs(a.length - b.length));
    }
    return Math.min(...answer);
}
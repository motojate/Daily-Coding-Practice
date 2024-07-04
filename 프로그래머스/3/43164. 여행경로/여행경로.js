function solution(tickets) {
  const graph = new Map();
  const visited = new Map();
  let answer = [];

  // 그래프 구성 및 방문 맵 초기화
  for (const [from, to] of tickets) {
    if (!graph.has(from)) graph.set(from, []);
    graph.get(from).push(to);

    const fromToStr = generateFromToStr(from, to);
    if (!visited.has(fromToStr)) visited.set(fromToStr, 0);
    visited.set(fromToStr, visited.get(fromToStr) + 1); // 중복 경로 처리
  }

  // 그래프 정렬
  for (const [key, value] of graph.entries()) {
    value.sort();
  }

  // DFS 함수 정의
  const dfs = (from, list) => {
    list.push(from);

    if (list.length === tickets.length + 1) {
      answer = list.slice(); // 가능한 경로 중 하나를 answer에 복사
      return true; // 경로 찾음
    }

    const toList = graph.get(from) ?? [];
    for (const to of toList) {
      const fromToStr = generateFromToStr(from, to);
      if (visited.get(fromToStr) > 0) {
        visited.set(fromToStr, visited.get(fromToStr) - 1);
        const found = dfs(to, list);
        if (found) return true; // 유효한 경로를 찾으면 종료
        visited.set(fromToStr, visited.get(fromToStr) + 1);
      }
    }

    list.pop();
    return false;
  };

  // ICN에서 시작
  dfs("ICN", []);
  return answer;
}

const generateFromToStr = (from, to) => {
  return `${from}${to}`;
};
function solution(num_list) {
    var answer = [];
    return [...num_list].map(_ => num_list.pop());
}
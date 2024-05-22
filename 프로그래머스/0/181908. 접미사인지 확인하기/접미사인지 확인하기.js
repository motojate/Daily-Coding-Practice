function solution(my_string, is_suffix) {
   
    for(let i = 0; i < my_string.length; i++) {
        if(is_suffix === my_string.slice(i)) return 1;
    }
    
    return 0;

}
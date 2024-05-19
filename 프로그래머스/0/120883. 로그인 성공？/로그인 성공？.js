function solution(id_pw, db) {
    const filterDb = db.filter(v => v[0] === id_pw[0]);

    if(filterDb.length) {
        if(filterDb[0][1] === id_pw[1]) return 'login';
        else return 'wrong pw'
    } else return 'fail';
}
function solution(bandage, health, attacks) {
    const maxHealth = health;
    const [combo, heal, comboHeal] = bandage;
    
    let time = 0;
    for(const attack of attacks) {
        const [at, ad] = attack;
        const healthState = health + (at - time - 1) * heal + Math.floor((at - time - 1) / combo) * comboHeal;
        health = healthState > maxHealth ? maxHealth : healthState;
        health -= ad;
        time = at;
        if(health <= 0) return -1;
    }
    return health;
}
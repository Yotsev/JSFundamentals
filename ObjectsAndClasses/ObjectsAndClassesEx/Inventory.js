function solve(input) {
    
    let heroes = [];

    for (let i = 0; i < input.length; i++) {
        let info = input[i].split(' / ');
        
        let name = info[0];
        let level = Number(info[1]);
        let items = info[2].split(', ');

        let currentHero = {
            name : name,
            level : level,
            items : items
        };

        heroes.push(currentHero);
    }

    let sorted = heroes.sort((a,b)=> a.level - b.level)

    for (const hero of sorted) {
        console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items.sort().join(', ')}`);
    }
}
solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])
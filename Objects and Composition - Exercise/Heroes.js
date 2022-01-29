function solve(){
    const fighter = (name) => {
        let hero = {
            name,
            health: 100,
            stamina: 100,
            fight(){
                console.log(`${hero.name} slashes at the foe!`);
                hero.stamina--;
            }
        }
        return hero;
    }
    
    const mage = (name) => {
        let hero = {
            name,
            health: 100,
            mana: 100,
            cast(spellName){
                console.log(`${hero.name} cast ${spellName}`);
                hero.mana--;
            }
        }
        return hero;
    }

    return {mage, fighter}
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);

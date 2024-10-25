// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"] 
// }
// adventurer.inventory.forEach(element => {
//     console.log(element)
// });
// console.log(adventurer.inventory[0])

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: `Frank`,
            type: `Flea`,
            belongings: [`small hat`, `sunglasses`]

        }
    },
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}
//     console.log(adventurer.companion.companion.belongings)
//     adventurer.roll() 
// Part 2: Class Fantasy
class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
       
    } 
    static max_health =100;
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}



//      // Re-create Robin using the Character class!
//       const robin = new Character("Robin");
//       robin.inventory = ["sword", "potion", "artifact"];
//       robin.companion = new Character("Leo");
//       robin.companion.type = "Cat";
//       robin.companion.companion = new Character("Frank");
//       robin.companion.companion.type = "Flea";
//       robin.companion.companion.inventory = ["small hat", "sunglasses"];
//       robin.roll();
//       robin.companion.roll();
//       robin.companion.companion.roll();
//       console.log(robin)

//Part 3: Class Features
class Adventurer extends Character {
    constructor(name, role, skill, weakness) {
        super(name);
        // Adventurers have specialized roles.
        this.role = role;
        ///Adventures have a special skill or talent
        this.skill = skill;
        ///Adventures have a weakness
        this.weakness = weakness;
        // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins");
        
    }
    ////Add a check to the constructor of the Adventurer class that ensures the given role matches one of these values.
    static roles =[`Fighter`,`Healer`, `Wizard`,`Hunter`,`Ninja`]
    // Adventurers have the ability to scout ahead of them.
    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
}
class Companion extends Character {
    constructor(name, type) {
        super(name);
        this.type = type;

    }
}
const robin = new Adventurer(`Robin`,`Ninja`,`sword fighting/Martial Arts`,`Lack of weapons`)
const leo = new Companion(`Leo`,`cat`,[`small hat, sunglasses`])
////inventory not showing in results
console.log(robin,leo)


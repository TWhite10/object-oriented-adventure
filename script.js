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
    static max_health = 100;
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
        if (!Adventurer.roles.includes(role)) {
            throw new Error(`Invalid roleplease select from: ${adventurer.roles}`)
        }
        this.role = role;
        ///Adventures have a special skill or talent
        this.skill = skill;
        ///Adventures have a weakness
        this.weakness = weakness;
        // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins");

    }
    ////Add a check to the constructor of the Adventurer class that ensures the given role matches one of these values.check with Includes()???

    static roles = [`Fighter`, `Healer`, `Wizard`, `Hunter`, `Ninja`];


    // Adventurers have the ability to scout ahead of them.
    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
    duel(challenger) {
        if (!challenger.role) {
            throw new Error(`Select a fellow Adventurer`)
        }
        console.log(`${this.name} has began a duel with ${challenger.name}`);
        //the duel goes on as long as the health is above 50
        while (this.health > 50 && challenger.health > 50) {
            let myRoll = Math.floor(Math.random() * 20) + 1;
            let theirRoll = Math.floor(Math.random() * 20) + 1;
            //the lower roll loses
            if (myRoll < theirRoll) {
                this.health -= 2;
                console.log(`${this.name} rolled ${myRoll} and got injured! current health is: ${this.health}`);
            } else {
                challenger.health -= 2;
                console.log(`${challenger.name} rolled ${theirRoll} and got injured! current health is:${challenger.health}`);
            }
        }
        //deciding the winner 
        let winner;
        if (this.health > 50) {
            winner = this.name;
            
        } else {
            winner = challenger.name;
        }
        console.log(`${winner} wins!`);

    }
}

//Part 4
class Companion extends Character {
    constructor(name, type) {
        super(name);
        this.type = type;

    }
}
const robin = new Adventurer(`Robin`,`Ninja`,`sword fighting/Martial Arts`,`Lack of weapons`)
const mark = new Adventurer(`Mark`,`Fighter`,`strength`,`Hunger`)
const melissa = new Adventurer(`Melissa `,`Hunter`,`Bow and Arrow`,`Overconfident`)
//how to duel multiple players ???
robin.duel(mark);

const leo = new Companion(`Leo`, `cat`, [`small hat, sunglasses`])
////inventory not showing in results
console.log(robin, leo)

//Part 5: Gather your Party
///An alternative approach to this would be to extend the Adventurer class to create a Healer class.
///This would be the practical approach if healers had additional properties and methods, 
///but if healers are just adventurers with a specific role, creating an entire class for them is inefficient.
class AdventurerFactory {
    constructor(role) {
        this.role = role;
        this.adventurers = [];
    }
    generate(name) {
        const newAdventurer = new Adventurer(name, this.role);
        this.adventurers.push(newAdventurer);
    }
    findByIndex(index) {
        return this.adventurers[index];
    }
    findByName(name) {
        return this.adventurers.find((a) => a.name === name);
    }
}

// const healers = new AdventurerFactory("Healer");
// const robin = healers.generate("Robin");


//Part 6: Developing Skills
class Healer extends Adventurer {
    constructor(name, role, skill, weakness) {
        this.name = name;
        this.role = role;
        this.skill = skill;
        this.weakness = weakness;
    }
}
////healers are trusted, healing abilities, awareness to situations, can have poison 



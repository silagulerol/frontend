/*creating variable*/
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0; 
let fighting;
let monsterHealth;
let inventory = ["stick"];


/*  in order to update HTML elements on a web page on an HTML page
you need to get references to them in your JavaScript code 
# is css selector for ID. for e.: "#button1" Id for button1 */ 
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xptext = document.querySelector("#xptext");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

/*example of object arr is an array, 
name is an object, which consist of key-value pairs.
i.e. key is name, value is Quincy Larson.

const arr = [
    {
        name: "Quincy Larson"
    }
]*/

const weapons = [
    {
        name: "stick",
        power:5
    },
    {
        name:"dagger",
        power: 30
    },
    {
        name: "sword",
        power: 100
    }
];

const monsters = [
    {
        name: "Slime",
        level: 2,
        health: 15
    },
    {
        name: "Fanged beast",
        level: 8,
        health: 20
    },
    {
        name: "dragon",
        level: 20,
        health: 300
    }
]

const locations = [
    {
        //each elemet in object is seperated by a comma
        name: "town square", // first property/element
        "button text" : ["Go to store", "Go to cave", "Fight dragon"],
        "button functions": [goStore, goCave, fightDragon],
        text: "You are in the town square. You see a sign that says \"store\" "
    },
    {
        name: "store", 
        "button text" : ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town squre"],
        "button functions": [buyHealth, buyWeapon, goTown],
        text: "You enter the store"
    },
    {
        name:"cave",
        "button text": ["Flight slime", "Flight fanged beast", "Go town square"],
        "button functions": [fightSlime, fightBeast, goTown],
        text: "You enter the cave. You see some monsters."
    },
    {
        name: "fight",
        "button text": ["Attack", "Dodge", "Run"],
        "button functions": [attack, dodge, goTown],
        text: "You are fighting with a monster."
    },
    {
        name: "kill monster",
        "button text": ["Go to town square", "Go to town square","Go to town square"],
        "button functions": [goTown, goTown, goTown],
        text: 'The monster screams "Arg!" As it ides. You gain experience points and find gold.'
    },
    {
        name: "lose",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],
        text: "You die."
    },
    { 
        name: "win",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],
        text: "You defeat te monster."
    }
    
]



// initializes button
button1.onclick = goStore; 
button2.onclick = goCave;
button3.onclick = fightDragon;


// function that updates buttons, when we click one of them
function update(location) {

    monsterStats.style.display = "none";
    //we cahnged the inner text.
    button1.innerText= location["button text"][0];
    button2.innerText= location["button text"][1];
    button3.innerText= location["button text"][2];
    button1.onclick = location["button functions"][0]; 
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    
    //we changed the text 
    text.innerText = location.text;
    // OR  text.innerText = location.text; // when key is a single word
}


function goTown() { 
    update(locations[0]);
}

function goStore() {
    //console.log("Going to store.");
    update(locations[1]);
}

function goCave() {
    //console.log("Going to cave.");
    update(locations[2])
}


function buyHealth() {
    if (gold >= 10){
        gold -= -10;
        health += 10;
        goldText.innerText =gold;
        healthText.innerText = health;
    } else {
         text.innerText = "You do not have enough gold to buy health."; 
    }

}

function buyWeapon(){
    if (currentWeapon < weapons.length - 1 ){
        if (gold >= 30){
            gold -= 30;
            currentWeapon++;
            goldText.innerText = gold;
            let newWeapon = weapons[currentWeapon].name;
            text.innerText = "You now have a " + newWeapon + ["."];
            inventory.push(newWeapon);
            text.innerText += "In your inventory you have: " + inventory;
        } else {
            text.innerText = "You do not enough gold to buy a new weapon."; 
        }
    } else {
        text.innerText = "You do already have most powerful weapon!"; 
        button2.innerText = "Sell weapon for 15 gold";
        button2.onclick = sellweapon;
    }
}

function sellweapon(){
    if (inventory.length > 1){
        gold += 15;
        goldText.innerText = gold;
        // we define new currentWeapon which will be known only in this scope (if statement)
        // shift(): removing first element in the array, and returning it
        let Currentweapon = inventory.shift(); 
        text.innerText = "You sold a " + currentWeapon + ".";
        text.innerText += "In your inventory you have:" + inventory;
    } else {
        text.innerText = "Don't sell your only weapon!";
    }
}

function fightSlime(){
    fighting = 0;
    goFight();
}

function fightBeast(){
    fighting = 1;
    goFight();
}

function fightDragon() {
    fighting = 2;
    goFight();
}

function goFight() {
    update(locations[3]);
    monsterHealth = monsters[fighting].health;
    // updating monsters style on css
    monsterStats.style.display = "block";
    monsterNameText.innerText= monsters[fighting].name;
    monsterHealthText.innerText = monsters[fighting].health;
}

function attack() {
    text.innerText = "The " + monsters[fighting].name + " attacks."; 
    text.innerText += "You attack it wit your  " + weapons[currentWeapon].name + "."; 
    
    if (isMonsterHit()) {
        health -= getMonsterAttackVaklue(monsters[fighting].level); //damage after attcak
    }else {
        text.innerText += "You miss";
    }

    monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
    monsterHealthText.innerText = monsterHealth;
    if (health <= 0){
        lose();
    } else if (monsterHealth <= 0) {
        fighting == 2 ? winGame() : defeatMonster(); 
    }
}

function getMonsterAttackVaklue(level) {
    let hit = (level *5) - (Math.floor(Math.random() * xp));
    console.log(hit);
    return hit;
}

function isMonsterHit() {
    // if math.random() (which returns numbers between (0,1)) is greater
    // than 0.2 (that's %80 of the time), then it returns True
    return Math.random() > .2 || health < 20;
}

/* We can simplify this tenory oprator
if (age >= 18) {
    adultFunction();
} else {
    kidFunction();
}
// condition ? if condition is True : else
age >= 18 ? adultFunctio() : kidFunction();*/ 

function dodge() {
    text.innerText = "you dodge the attack from the " + monster[fighting].name + "."; 
}

function defeatMonster() {
    gold += Math.floor(monsters[fighting].level * 6.79);
    xp += monsters[fighting].level;
    goldText.innerText = gold
    xp.innerText = xp;
    update(locations[4]);
}

function lose(){
    update(locations[5]);
}

function winGame(){
    update(locations[6]);
}

function restart() {
    let xp = 0;
    let health = 100;
    let gold = 50;
    let currentWeapon = 0; 
    let inventory = ["stick"];
    goldText.innerText = gold
    xp.innerText = xp;
    goTown(); 
}
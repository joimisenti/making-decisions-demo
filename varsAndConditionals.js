/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

//Create a variable for Jon and Jaime's attack strengths.
let jonSnowAttack = 25
let jaimeLannisterAttack = 45

//Before battle begins, Jon and Jaime decide compare attack strengths to get insight into who might win this battle. Using an if-else statement, console.log who has the greater attack strength.
if (jonSnowAttack > jaimeLannisterAttack){
    console.log(`Jon's attack is greater than Jaime's`)
} else {
    console.log(`Jaime's attack is greater`)
}

//What if we have a tie? Our code would actually give the win to Jamie. Add an else if to resolve this.

if(jonSnowAttack > jaimeLannisterAttack){
    console.log(`Jon's attack is greater than Jaime's`)
} else if(jaimeLannisterAttack > jonSnowAttack) {
    console.log(`Jaime's attack is greater`)
} else {
    console.log(`its a tie`)
}

//Jamie, knowing he is superior, intiates a fight with Jon. Create additional stats for Jon Snow so we can see how this plays out.

let jonSnowHealth = 100
let jonSnowDefense = 0

//Jaime attacks first - use an if/else to determine if Jon Snow can survive the attack.

if(jonSnowHealth <= jaimeLannisterAttack){
    console.log(`jon has been slain`)
} else {
    jonSnowHealth = jonSnowHealth - jaimeLannisterAttack
    // jonSnowHealth -= jaimeLannisterHealth
    console.log(`Jon Snow's remaining health is ${jonSnowHealth}`)
}

//Jon Snow picks up shield. Increase Jon's defense by 25.

jonSnowDefense += 25 //reassigning variable, dependent on looseness of language

//Jamie attacks again. Use if/else to determine if Jon Snow can survive.
if(jonSnowHealth <= jaimeLannisterAttack - jonSnowDefense){
    console.log(`jon has been slain`)
} else {
    jonSnowHealth = jonSnowHealth - (jaimeLannisterAttack - jonSnowDefense)
    console.log(`Jon Snow's remaining health is ${jonSnowHealth}`)
}

//One of the town's people, throws Jon a health kit. Health can raise Jon's health by 50 pts. However, health cannot exceed 100.

if(jonSnowHealth <= 50) {
    jonSnowHealth += 50
} else {
    jonSnowHealth = 100
}
console.log(jonSnowHealth)

//If flipped coin is heads, Jaime aims to take Jon's head. If tails, Jaime allows Jon to run away.

let coinLandsHeads = false

if(coinLandsHeads === false) {
    console.log(`Jon runs away.`)
} else {
    console.log(`the fight continues`)
}

//Create for loop that will have Jaime attack Jon 5 times.

// for(let i = 1; i <= 5; i++){
//     jonSnowHealth -= (jaimeLannisterAttack - jonSnowDefense)
//     console.log(`Jon snow's health is now ${jonSnowHealth}`)
// }

//Add condition to check if Jon Snow will survive

// for(let i = 1; i <= 6; i++){
//     if(jonSnowHealth <= 0) {
//     console.log(`jon has been slain`)
//     } else {
//         jonSnowHealth -= (jaimeLannisterAttack - jonSnowDefense)
//         console.log(`Jon snow's health is now ${jonSnowHealth}`)
//     }
// }

//Demonstrate a while loop that will have Jaime attack Jon until Jon is slain.

while(jonSnowHealth > 0){
    jonSnowHealth -= (jaimeLannisterAttack - jonSnowDefense)
    console.log(`Jon snow's health is now ${jonSnowHealth}`)
    if(jonSnowHealth <= 0){
        console.log(`Jon has been slain`)
    }
}
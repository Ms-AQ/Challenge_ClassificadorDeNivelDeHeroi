
let quantityHeroes = prompt("Tell the number of Heroes you want to check their level:")

for(let i = 0; i < quantityHeroes; i++) {
    let name = prompt("Say the name of your hero: ")
    let xp = prompt("Tell the amount of experience your Hero has: ")

    if (xp < 1000) {level = "Iron";}
    else if (xp >= 1001 && xp <= 2000) {level = "Bronze";}
    else if (xp >= 2001 && xp <= 4000) {level = "Silver";}
    else if (xp >= 4001 && xp <= 7000) {level = "Gold";}
    else if (xp >= 7001 && xp <= 11000) {level = "Platinum";}
    else if (xp >= 11001 && xp <= 16000) {level = "Ascendant";}
    else if (xp >= 16001 && xp <= 22000) {level = "Immortal";}
    else if (xp >= 22001) {level = "Radiant";}

    console.log("The hero named " + name + " is at the " + level + " level.")
}
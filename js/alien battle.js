const aliens = [];
const enterprise = {
    hull: 20,
    firepower: 5,
    accuracy: .7,
    attack(alien){
        if(Math.random() < this.accuracy){
            alien.hull -= this.firepower;
        }
    }
}
let gameOn = true;
// I stole this function from stackoverflow https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-ranges
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
class Alien{
    constructor(){
        this.hull = getRandomNumber(3,7);
        this.firepower = getRandomNumber(2,5);
        this.accuracy = getRandomNumber(6,9) / 10;
    }
    attack(ship){
        if(Math.random() < this.accuracy){
            console.log("ALIEN HIT YOU");
            ship.hull -= this.firepower;
        }
    }
}
function generateAliens(numberOfAliens){
    for(let i = 0; i < numberOfAliens; i++){
        const alien = new Alien();
        aliens.push(alien);
    }
}

function playerChoosesToContinue(){
    const choice = prompt(`After fierce combat, your ship has ${enterprise.hull} health and the next, hateful enemy has ${aliens[0].hull} health. There are ${aliens.length} enemies remaining. Continue? y/n`)
    if(choice === "n"){
        gameOn = false;
    }else if(choice !=="y"){
        playerChoosesToContinue();
    }
}
function roundOfCombat(){
    enterprise.attack(aliens[0]);
    if(aliens[0].hull > 0){
        aliens[0].attack(enterprise);
        if(enterprise.hull < 1){
            console.log("YOU STINK LOSER");
            gameOn = false;
        }
    }else{
        aliens.shift();
        if(aliens.length === 0){
            console.log("YOU WIN")
            alert("CONGRATULATIONS YOU SUCCESSFULLY WIPED OUT THIS CULTURED AND BEAUTIFUL ALIEN SPECIES. THE VILLAIN WAS YOU ALL ALONGGGGGGGGGGGGG!")
        }else{
            playerChoosesToContinue();
        }
    }
}
generateAliens(10)
while(enterprise.hull > 0 && aliens.length && gameOn){
    roundOfCombat();
}
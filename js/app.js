console.log('up and running');

cards = [
  {
    name: "Bulbasaur",
    damage: 60
  }, {
    name: "Caterpie",
    damage: 40
  }, {
    name: "Charmander",
    damage: 60
  }, {
    name: "Clefairy",
    damage: 50
  }, {
    name: "Jigglypuff",
    damage: 60
  }, {
    name: "Mankey",
    damage: 30
  }, {
    name: "Meowth",
    damage: 60
  }, {
    name: "Nidoran - female",
    damage: 60
  }, {
    name: "Nidoran - male",
    damage: 50
  }, {
    name: "Oddish",
    damage: 40
  }, {
    name: "Pidgey",
    damage: 50
  }, {
    name: "Pikachu",
    damage: 50
  }, {
    name: "Poliwag",
    damage: 50
  }, {
    name: "Psyduck",
    damage: 60
  }, {
    name: "Rattata",
    damage: 30
  }, {
    name: "Squirtle",
    damage: 60
  }, {
    name: "Vulpix",
    damage: 50
  }, {
    name: "Weedle", 
    damage: 40
  }
]
//create Game object 
// start the game, deal a hand for the player and a hand for the computer, 3 cards each
// keep an array of which cards have been dealt already
// player lays a card and computer lays a card from their hand
// create a function to compare the damage value of each card
// 

class Game {
	constructor() {
		this.cardsDealt = [];
    this.humanPlayer = new Player();
    this.computerPlayer = new Player();
    this.setupGame();


	}
  setupGame() {
      for(let i=0; i < 18; i++){
        this.cardsDealt.push(false)
      }
  }
  playGame() {
    for(let i = 0; i <3; i++){
      this.playRound();
    }
  }
	playRound(){
    this.dealCards();

  }
  dealCards(){
    for(let i=0; i<3; i++){
      let humanCard = this.dealSingle();
      let computerCard = this.dealSingle();
      this.humanPlayer.hand.push(humanCard);
      this.computerPlayer.hand.push(computerCard);
    }

  }
  dealSingle(){
     // pick a random number bw 0-17
     // call it i
     // check if i is true in cardsDealt(), pick another number
     // when you get a number that hasn't been played  yet
     // set cardsDealt[i] = true
     // return i
     let foundValidCard = false;
     while (!foundValidCard){
       let i = Math.floor(Math.random() * (17 + 1));
       if (!this.cardsDealt[i]){
        foundValidCard = true;
        this.cardsDealt[i] = true;
        return i;
       }
     }
     

  }
}
//The player should be able to:
// see their stats: their points and how many rounds they've won.
// see what cards they have been dealt/see what cards are left in their hand
// pick a card from the hand that has been dealt to them (
//thereby playing this card agaist the computer's card). The round ends once this has happened 3 times.
// receive new cards given to them by the game each round.
// see the cards that they have played in the past.
class Player {
  constructor() {
    this.roundsWon = 0;
    this.points = 0;
    this.hand = [];

  }
}

//18 pokemon cards in the deck - keep library of what is left to play
// player is dealt three random cards from the deck
// computer dealt three random

game = new Game();
game.playGame();

//create Player object

// There are 18 Pokemon cards in the deck
// Eggbert (the player) is dealt three random cards from the deck
// The computer is dealt three random cards from the deck
// Eggbert chooses a card and plays it! It has a damage of 10.
// The computer randomly chooses a card and plays it! It has a damage of 8.
// Eggbert wins!

// keep a library of all the Pokemon cards that can be played (see the array in the "The Cards" section)

// know what cards have been played
// know how many cards are left to be played/dealt overall
// track points for both the player and the computer Note: Points are determined by the following: If the player's card beats the computer's card, the player gets one point (and vice versa). If there is a tie, no one gets a point.
// track rounds
// track number of rounds won for both player and computer
// automatically deal 3 cards from the library to the player and 3 cards to the computer each round
// determine the winner of each play
// stop once there are no cards left or not enough to deal 3 to each the player and computer
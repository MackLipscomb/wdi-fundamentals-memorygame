
const cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var cardOne = cards[1];
cardsInPlay.push(cards[0]);
console.log("User flipped queen");

var cardTwo = cards[2];
cardsInPlay.push(cards[1]);
console.log("User flipped queen");

if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} else {
	alert("sorry, try again");
}

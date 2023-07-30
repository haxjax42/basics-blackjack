var main = function (input) {
  var myOutputValue = displayHands() + compare(playerHand, computerHand);
  return myOutputValue;
};

var deck = createDeck(); // create a deck from function createDeck()
var shuffledDeck = shuffleDeck(deck); //shuffle the created deck using shuffleDeck function
console.log(shuffledDeck);
var playerCard1 = shuffledDeck.pop();
var computerCard1 = shuffledDeck.pop();
var playerCard2 = shuffledDeck.pop();
var computerCard2 = shuffledDeck.pop();
var playerHand = playerCard1.value + playerCard2.value;
var computerHand = computerCard1.value + computerCard2.value;

function createDeck() {
  var newDeck = [];
  var suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
  var names = [
    "Ace",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Jack",
    "Queen",
    "King",
  ];
  var cardValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
  for (var j = 0; j < names.length; j += 1) {
    for (var i = 0; i < suits.length; i += 1) {
      var card = {
        suit: suits[i],
        name: names[j],
        value: cardValue[j],
      };
      newDeck.push(card);
    }
  }
  return newDeck;
}

console.log(playerCard1);
console.log(computerCard1);
console.log(playerCard2);
console.log(computerCard2);
console.log(shuffledDeck.length);
console.log(playerHand);
// Get a random index ranging from 0 (inclusive) to max (exclusive).
function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

// Shuffle the elements in the cardDeck array
function shuffleDeck(cardDeck) {
  // Loop over the card deck array once
  var currentIndex = 0;
  while (currentIndex < cardDeck.length) {
    // Select a random index in the deck
    var randomIndex = getRandomIndex(cardDeck.length);
    // Select the card that corresponds to randomIndex
    var randomCard = cardDeck[randomIndex];
    // Select the card that corresponds to currentIndex
    var currentCard = cardDeck[currentIndex];
    // Swap positions of randomCard and currentCard in the deck
    cardDeck[currentIndex] = randomCard;
    cardDeck[randomIndex] = currentCard;
    // Increment currentIndex
    currentIndex = currentIndex + 1;
  }
  // Return the shuffled deck
  return cardDeck;
}

function compare(pHand, cHand) {
  var compare = "";
  if (pHand > cHand) {
    compare = `Player Wins!`;
    return compare;
  } else if (cHand > pHand) {
    compare = `Computer Wins!`;
    return compare;
  }
  compare = `Tie`;
  return compare;
}

function displayHands() {
  var display = `Player Hand: ${playerCard1.name} of ${playerCard1.suit}, ${playerCard2.name} of ${playerCard2.suit}<br>Computer Hand: ${computerCard1.name} of ${computerCard1.suit}, ${computerCard2.name} of ${computerCard2.suit}<br>`;
  return display;
}

var deck = createDeck(); // create a deck from function createDeck()

var shuffledDeck = shuffleDeck(deck); //shuffle the created deck using shuffleDeck function

var playerCard1 = shuffledDeck.pop();
var computerCard1 = shuffledDeck.pop();
var playerCard2 = shuffledDeck.pop();
var computerCard2 = shuffledDeck.pop();
var playerHand = [playerCard1, playerCard2];
var computerHand = [computerCard1, computerCard2];
var playerHandValue = playerCard1.value + playerCard2.value;
var computerHandValue = computerCard1.value + computerCard2.value;

var mode = "gameStart";

// create a deck of cards
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
  var cardValue = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
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

// compare playerHandValue and computerHandValue, and display result
function compare(pHand, cHand) {
  var compare = "";
  if (pHand > cHand && pHand < 22) {
    compare = `Player Wins!<br><br>Player Value: ${playerHandValue}<br>Computer Value:${computerHandValue}`;
    return compare;
  } else if (cHand > pHand && cHand < 22) {
    compare = `Computer Wins!<br><br>Player Value: ${playerHandValue}<br>Computer Value:${computerHandValue}`;
    return compare;
  } else if (pHand > 21 && cHand < 22) {
    compare = `Player Busted! Computer Wins!<br><br>Player Value: ${playerHandValue}<br>Computer Value:${computerHandValue}`;
    return compare;
  } else if (cHand > 21 && pHand < 22) {
    compare = `Computer Busted!  Wins!<br><br>Player Value: ${playerHandValue}<br>Computer Value:${computerHandValue}`;
  } else
    compare = `Tie!<br><br>Player Value: ${playerHandValue}<br>Computer Value:${computerHandValue}`;
  return compare;
}

// display cards draw by player and computer
function displayHands() {
  var displayPlayer = "Player Hand:<br>";
  for (var i = 0; i < playerHand.length; i += 1) {
    displayPlayer =
      displayPlayer + `${playerHand[i].name} of ${playerHand[i].suit}<br>`;
  }
  var displayComputer = "Computer Hand:<br>";
  for (var j = 0; j < computerHand.length; j += 1) {
    displayComputer =
      displayComputer +
      `${computerHand[j].name} of ${computerHand[j].suit}<br>`;
  }
  return `${displayPlayer}Player Total Value: ${playerHandValue}<br><br>${displayComputer}Computer Total Value: ${computerHandValue}`;
}
console.log(playerCard1);
console.log(computerCard1);
console.log(playerCard2);
console.log(computerCard2);
console.log(shuffledDeck.length);
console.log(playerHand);
console.log(playerHandValue);

// function playerInput(hitOrStand) {
//   if (hitOrStand == "H" || hitOrStand == "h") {
//     playerHand = playerHand + shuffledDeck.pop().value;
//   } else {
//     compare(playerHand, computerHand);
//   }
// }

// if (mode == "hitOrStand") {
//   var display = "Please Enter [H]it or [S]tand to continue";
//   if (hitOrStand == "H" || hitOrStand == "h") {
//     playerHand = playerHand + shuffledDeck.pop().value;
//     mode = "hitOrStand";
//   } else if (hitOrStand == "S" || hitOrStand == "s") {
//     compare(playerHand, computerHand);
//   }
//   mode == "hitOrStand";
//   return display;
// }

// function displayPlayerHand() {
//   var displayHand = "";
//   for (var i = 0; i < playerHand.length; i += 1)
//     displayHand = `${playerHand[i].name} of ${playerHand[i].suit}<br>`;
//   return displayHand;
// }

var main = function (input) {
  var myOutputValue = "";
  if (mode == "gameStart") {
    mode = "hitOrStand";
    myOutputValue = displayHands();
    return myOutputValue;
  }

  if (mode == "hitOrStand") {
    // input validation
    if (input != "s" || input != "h") {
      myOutputValue = "Please enter h or s";
    }

    if (input == "h") {
      if (playerHandValue < 22) {
        playerHand.push(shuffledDeck.pop()); //push a new card from shuffledDeck into playerHand
        playerHandValue =
          playerHandValue + playerHand[playerHand.length - 1].value; // add new card value to the total value

        //check if player is busted. and set mode to gameEnd
        if (playerHandValue > 21) {
          mode = "gameEnd";
          // if player is busted. Do not end game but let computer draw cards if computer has less than 17 in value.
          while (computerHandValue < 17) {
            computerHand.push(shuffledDeck.pop());
            computerHandValue =
              computerHandValue + computerHand[computerHand.length - 1].value;
          }
        }
        myOutputValue = displayHands(); //return displayHand after Player choose to Hit
      }
    }
    if (input == "s") {
      mode = "gameEnd";
      while (computerHandValue < 17) {
        computerHand.push(shuffledDeck.pop());
        computerHandValue =
          computerHandValue + computerHand[computerHand.length - 1].value;
      }
    }
  }

  // Game ends. Display result
  if (mode == "gameEnd") {
    myOutputValue = `${displayHands()}<br><br>${compare(
      playerHandValue,
      computerHandValue
    )}`;
    return myOutputValue;
  }
  return myOutputValue;
};

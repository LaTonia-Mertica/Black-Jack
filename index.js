let card1 = getRandomCard();
let card2 = getRandomCard();

let player = {
  name: "La'Tonia Mertica",
  chips: 44000000,
  sayHello: function () {
    console.log("Hey there!");
  }
};

player.sayHello();

let cards = [];
// let cards = [card1, card2];
// let sum = card1 + card2;

let sum = 0;

let isBlackJack = false;
let isStillInGame = false;

let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

// let playerName = "La'Tonia Mertica";
// let playerChips = 147;

let playerEl = document.getElementById("player-el");
playerEl.textContent = `${player.name}` + ": $" + `${player.chips}`;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isStillInGame = true;
  let card1 = getRandomCard();
  let card2 = getRandomCard();
  cards = [card1, card2];
  sum = card1 + card2;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  // for (let i = 0; i < cards.length; i++) {
  //   cardsEl.textContent += cards[i] + " ";
  // }

  for (const card of cards) {
    cardsEl.textContent += card + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Would you like another card?";
  } else if (sum === 21) {
    message = "Go You - 21!";
    isBlackJack = true;
  } else {
    message = "Maybe next time - You're out the game.";
    isStillInGame = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isStillInGame === true && isBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

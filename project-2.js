class Card {
  constructor(suit, rank, score) {
    this.suit = suit
    this.rank = rank
    this.score = score
  }
}

class Deck {
  constructor() {
    this.cards = this.createDeck()
  }
  createDeck() {
    let cards = []
    let suits = ['♡', '♤', '♧', '♢']
    let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < ranks.length; j++) {
        cards.push(new Card(suits[i], ranks[j], j + 2))
      }
    }
    return cards
  }
}

const myDeck = new Deck()


myDeck.cards.sort((a, b) => Math.random() - 0.5)


let deckOne = myDeck.cards.slice(0, myDeck.cards.length/2 + 1)
let deckTwo = myDeck.cards.slice(myDeck.cards.length/2 + 1)



class Player {
    constructor(name, deck) {
      this.name = name;
      this.deck = deck;
    }
 }

 let playerA = new Player('playerA', deckOne);
 let playerB = new Player('playerB', deckTwo);
console.log(playerA.deck, playerB.deck)

// function war() {
//   let cardA = playerA.deck.pop()
//   // console.log(playerA.deck.length,playerA.deck[-1],playerB.deck.length,playerB.deck[-1])
//   let cardB = playerB.deck.pop()
//   let pile = []
// console.log(cardA.score,cardB.score)
//   // console.log(cardA, cardB)

//   if (cardA.score > cardB.score) {
//     playerA.deck.unshift(cardA, cardB)
//     console.log(playerA.deck[0],'A wins')
//   }

//   else if (cardA.score < cardB.score) {
//     playerB.deck.unshift(cardA, cardB)
//     console.log(playerB.deck[0],'B wins')
//   }
  
//   else if (cardA.score === cardB.score) {
//     pile.unshift(cardA, cardB)
//     pile.unshift(cardA, cardB)
//     pile.unshift(cardA, cardB)
//   }
// }

// while (playerA.deck.length && playerB.deck.length !== 0) {
//   war()
// }

// if (playerA.deck.length === 0) {
//   console.log('playerB wins')
// } else if (playerB.deck.length === 0) {
//   console.log('playerA wins')
// }


// war()
// // console.log(playerA.deck.length)
// // console.log(playerB.deck.length)

let pile = []
war()
function war() {

  if (playerA.deck.length === 0) {
    console.log('playerB wins') 
    return
  } else if (playerB.deck.length === 0) {
    console.log('playerA wins')
    return
  }
  
  else if (playerA.deck[0].score > playerB.deck[0].score) {
    pile = [playerA.deck.shift(), playerB.deck.shift()]
    playerA.deck.push(...pile)
    console.log(playerA.deck.length, playerB.deck.length, 'A wins')
    war ()
  }

  else if (playerA.deck[0].score < playerB.deck[0].score) {
    pile = [playerB.deck.shift(), playerA.deck.shift()]
    playerB.deck.push(...pile)
    console.log(playerB.deck.length, playerA.deck.length, 'B wins')
    war ()
  }
  
  else if (playerA.deck[0].score === playerB.deck[0].score) {
    if (playerA.deck.length >= 4 && playerB.deck.length >= 4) {
      let array = [...playerA.deck.splice(0, 3), ...playerB.deck.splice(0, 3)]
      pile.push (...array)
      war()
    }
    else {
      if (playerA.deck.length < 4) { 
        playerA.deck.length = 0
        war()
      }
      else {
        playerB.deck.length = 0
        war()
      }
    }
  }
}
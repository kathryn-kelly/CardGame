// create a class so we can use this deck for any multitude of games, making multiple instance of a deck (poker, blackjack, etc.)
// constructor is called when you initiate a class

// class Card {
//             constructor(suit, value) {
//                 this.suit = suit;
//                 this.value = value;
//             }
//         }

//     let card = new Card('diamonds', 4);
//     //console.log(card);

//     class Deck {
//         constructor() {
//             this.deck = [];
//         }
        
//         createDeck(suits, values) {
//             for (let s = 0; s < suits.length; s++) {
//                 for (let v = 0; v < values.length; v++) {
//                     this.deck.push(new Card(suits[s], values[v]))
//                 }
//             }
//         }

//         shuffle(){
//             const { deck } = this;
//             let m = deck.length, i;

//         while(m) {
//             i = Math.floor(Math.random() * m--);

//             [deck[m], deck[i] = [deck[i], deck[m]];
//         }
//         return this;
//         }

//         deal(){
//             return this.deck.pop();
//         }
//      }


// let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack','queen','king','ace'];
// let suits = ['diamonds','clubs','hearts','spades'];
// let deck1 = new Deck(suits, values);
// deck1.createDeck(suits, values);
// deck1.shuffle()
// console.log(deck1);
// deck1.shuffle(deck1)
// var deck1 = shuffle(deck);
// console.log(deck1);

// deck2 = shuffle(deck1.slice(0));
// console.log(deck2);

// deal(){
// let hand = [];
// while(hand.length < 5){
// hand.push(this.deck.pop());
// }
// return hand;






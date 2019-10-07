// there are two players, each of them draws a card from the deck, 
// they compare and the player with the highest card gets both of the cards and puts them in their personal deck, 
// once all the cards have been drawn from the main deck, 
// the player with the most cards in their personal deck wins

var values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack','queen','king','ace'];
var suits = ['diamonds','clubs','hearts','spades'];
var cards = [];
var players = [
  [],
  []
];
var startGame = true;
var gameOver = false;

  function playGame() {
    if (startGame) {
        startGame = false;
      buildDeck();
      shuffle(cards);
      deal(cards);
    }
    battle();
  }
  // output the score || game over
  function battle() {
    if (!gameOver) {
      var card1 = players[0].shift();
      var card2 = players[1].shift();
      var pot = [card1, card2];
      compareCards(card1,card2,pot);
    }else{
      outputMessage("Game over");
    }
  }
// see game being played
  function outputMessage(message){
    console.log("message");
  }
// who has higher card gets the pot
  function compareCards(card1,card2,pot){
    if((players[0].length <= 4)||(players[1].length <= 4)){
      gameOver = true;
      return;
    }
    if(card1.cardValue > card2.cardValue){
      outputMessage("Player 1 wins");
      players[0] = players[0].concat(pot);
    }
    else (card1.cardValue < card2.cardValue){
      outputMessage("Player 2 wins");
      players[1] = players[1].concat(pot);
    }
  }
// nested for loops to loop through s value in suits & v value in values, makes a card, cardValue forcing it to be a value
function createDeck(suits, values) {
    for (let s = 0; s < suits.length; s++) {
        for (let v = 0; v < values.length; v++) {
            this.deck.push(new Card(suits[s], values[v]))
        }
    }
}
  function shuffle(array) {
      // swap the picked element with the current element,
      // then pick the next random element from the remainder
      // the loop runs backwards so that the random pick is simplified
      // and it skips the last element because there are no other choices
    for (var x = array.length - 1; x > 0; x--) {
      var ii = Math.floor(Math.random() * (x + 1));
      var temp = array[x];
      array[x] = array[ii];
      array[ii] = temp;
    }
    return array;
  }
  function deal(array) {
    for (var i = 0; i < array.length; i++) {
        // modulous operator gets remainder of the divison
        // this will yield even distribution of cards
      var m = i % 2;
      players[m].push(array[i]);
    }
  }
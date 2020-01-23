// Code your solutions in this file
// const gifts = ["teddy bear", "drone", "doll"];
 
// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }
 
//   return gifts;
// }
 
// wrapGifts(gifts);

function writeCards( whoGifts, cards) {
  let tyCards = []
  for ( let i = 0; i < whoGifts.length; i++ ) {
    tyCards.push( `Thank you, ${whoGifts[i]}, for the wonderful ${cards} gift!` );
  }
  return tyCards;
} 

// writeCards(["Ada", "Brendan", "Ali"], "birthday");


function countDown( startingNumber ) {
  while (startingNumber > 0 ) {
    console.log( startingNumber );
    startingNumber -= 1;
  }
  console.log( startingNumber );
}

countDown(10)
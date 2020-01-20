// Code your solutions in this file
const invited = ['Lisa', 'Kaitlin', 'Jan'];
const newArray = [];
let messages;
function writeCards(invited) {
  for (let i = 0; i < invited.length; i++) {
    newArray.push(`Thank you, ${invited[i]}, for the wonderful surprise gift!`);
  }
  return newArray; 
}

function countDown( number ) {
  while ( number > 0) {
    console.log(number);
      number -= 1;
  }
  console.log( number);
}


function writeCards(names) {
  let cards = [];
  for (let i = 0; i < names.length; i++) {
    cards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }
  return cards;
}

function countDown(num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
}
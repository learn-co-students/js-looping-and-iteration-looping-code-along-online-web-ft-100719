const cards = (['Lisa', 'Kaitlin', 'Jan'], 'surprise');

function writeCards(cards)  {
    const messages = [ ]
    for (let i = 0; i < cards.length; i++) {
        const message = (`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
        messages.push(message);
    }
    return messages; 
}

let countDown = 10;
while (countDown <= 10 ) {
    console.log(countDown--);
}
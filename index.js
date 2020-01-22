const cards = (['Lisa', 'Kaitlin', 'Jan'], 'surprise');

function writeCards(cards)  {
    const messages = [ ]
    for (let i = 0; i < cards.length; i++) {
        const message = (`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
        messages.push(message);
    }
    return messages; 
}

function countDown() {
    for (let countDown = 10; countDown > -1; countDown--) {
        console.log(countDown);
    }
}


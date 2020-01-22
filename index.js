const thankYouCards = [];

function writeCards(giftGivers, giftType) {
    for (let i = 0; i < giftGivers.length; i++){
        let message = `Thank you, ${giftGivers[i]}, for the wonderful ${giftType} gift!`;
        thankYouCards.push(message);
    }

    return thankYouCards;
}

function countDown(num) {
    let i = num;
    while (i >= 0) {
    console.log(i);
    i--; 
    }
}
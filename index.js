// Code your solutions in this file
let thank_you_messages = [];

function writeCards(people, message) {
    for (let i = 0; i < people.length; i++) {
      thank_you_messages.push (`Thank you, ${people[i]}, for the wonderful ${message} gift!`);
     }
     return thank_you_messages;
}

function countDown(int) { 
    while (int >= 0) {
        console.log(int); 
        int -= 1;
    }
}
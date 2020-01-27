// Code your solutions in this file
function countDown(startNumber) {
  for (let i = startNumber; i >= 0; i--) {
    console.log(i);
  }
}

function writeCards(names, event) {
  let arrayToReturn = [];
  for (let i = 0; i < names.length; i++) {
    arrayToReturn.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return arrayToReturn;
}
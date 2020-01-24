// Code your solutions in this file
function writeCards(arrayOfNames) {
  const cardsArray = []; 
  arrayOfNames.forEach(name => {
    cardsArray.push(`Thank you, ${name}, for the wonderful surprise gift!`)
  });
  return cardsArray;
};

function countDown(startingNum) {
  for (let i = startingNum; i >= 0; i--) {
    console.log(i);
  }
}
function writeCards(array, event) {
  for (let i = 0; i < array.length; i++) {
    array[i] = `Thank you, ${array[i]}, for the wonderful ${event} gift!`;
  }
  return array;
}
writeCards(array);

function countDown(num) {
  while (num >= 0) {
    console.log(num--);
  }
}

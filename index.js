// Code your solutions in this file
 
function writeCards(guests, occasion) {
    let new_array = []
    for (let i = 0; i < guests.length; i++) {
        new_array.push `Thank you, ${guests[i]}, for the wonderful ${occasion} gift!`
        //console.log(`Thank you, ${guests[i]}, for the wonderful ${occasion} gift!`);
    }
    return new_array
}

function countDown (start_num) {
    while (start_num >= 0) {
      console.log(start_num);
      start_num--;
    }  
}

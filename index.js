// Code your solutions in this file
/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    
  }

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        
    }

    return gifts;
}

wrapGifts(gifts);*/

const name = ['Lisa', 'Kaitlin', 'Jan'];
const surpriseEvent = [];

function writeCards(name, event) {
    for (let i = 0; i < name.length; i++) {
        surpriseEvent[i] = (`Thank you, ${name[i]}, for the wonderful ${event} gift!`);

    }

    return surpriseEvent;
    //debugger;
}

let integer = 0;
function countDown(integer) {
    while (integer >= 0){
       console.log(integer);
       integer--;
    }
    //countDown(10);
}

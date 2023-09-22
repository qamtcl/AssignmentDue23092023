"use strict";
let a = 12;
let promiseFirst = new Promise((resolve, reject) => {
    if (a > 10) {
        resolve(`Please aboard! as the bus is ready for  travelling`);
    }
    else {
        reject(`Sorry! please take your refund from the counter`);
    }
});
promiseFirst.then((a) => {
    console.log(a);
})
    .catch((b) => {
    console.log(b);
});

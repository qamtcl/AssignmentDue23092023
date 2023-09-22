

// PUSH
// [1,2,3].push(4)//[1,2,3,4]
let a = [1,2,3]
console.log(a.push(4));
console.log(a) //[1,2,3,4]

// POP
// [1,2,3].pop()//[1,2]
let a1 = [ 1,2,3]
console.log(a1.pop());
console.log(a1) //[1,2]

// SHIFT
// [1,2,3].shift()//[2,3]
let a2 = [1,2,3]
console.log(a2.shift());
console.log(a2)//[2,3]

// UN_SHIFT
// [1,2,3].unshift()//[0,1,2,3]
let a3 = [1,2,3]
console.log(a3.unshift(0));
console.log(a3); //[ 0, 1, 2, 3 ]

// CONCAT
// ['a','b'].concat ('c') // ['a', 'b', 'c']
let a4=['a', 'b']
let a5=['c']
let a6 = a4.concat(a5);
console.log(a6);  ['a', 'b', 'c']

// JOIN
// ['a', 'b', 'c'].join ('-') // a-b-c
let a7 = ['a','b', 'c']
console.log(a7.join('-')); //a-b-c

//SLICE
// ['a', 'b', 'c'].slice(1) // [ 'a', 'b']
let bb = ['a', 'b', 'c'];
console.log(bb.slice(0,2)); // ['a', 'b']
console.log(bb.slice(1)); //[ 'b', 'c']

//INDEX OF
// ['a', 'b', 'c'].indexOf('b') // 1
console.log(bb.indexOf('b')) //1

//INCLUDES
// ['a', 'b', 'c'].includes('c'); // true
console.log(bb.includes('c')); // true

//FIND
// [3,5,6,8].find((n)) => n % 2 === 0) // 6
let z = [3,5,6,8]
console.log(z.find((z) => z % 2 === 0)) //6


//FIND INDEX
// [2,4,3,5].findIndex((n) => n % 2 !== 0); //2
var n = [2,4,3,5]
console.log(n.findIndex((n) => n % 2 !== 0)); //2

//MAP
// [3,4,8,6].map((n)=> n * 2 ) // [ 6,8,16,12]
var  n = [3,4,8,6];
console.log(n.map((n)=> n * 2 )); // [ 6, 8, 16, 12 ]

//FILTER
// [1,4,7,8].filter((n) => n % 2 === 0) // [4,8]
var n = [1,4,7,8];
console.log(n.filter((n) => n % 2 === 0) ); // [ 4, 8 ]

//REDUCE
// [ 2,4,3,7].reduce((acc, cur) => acc + cur) // 16
 var n= [ 2,4,3,7];
console.log(n.reduce((acc, cur) => acc + cur)); //16

//EVERY
// [2,3,4,5].every((x)) => x < 6) // true
var n = [2,3,4,5];
console.log(n.every((x) => x < 6)); // true

//SOME
// [ 3,5,6,8 ].some((n)=> n > 6); // true
var x = [3,5,6,8];
console.log(x.some((n)=> n > 6)); // true


//REVERSE
// [1,2,3,4].reverse() // [4,3,2,1]
var x = [1,2,3,4]
console.log(x.reverse());  // [ 4, 3, 2, 1 ]


// AT
// [3,5,7,8].at(-2) //7
let i = [3,5,7,8];
console.log(i.at(-2)); //7





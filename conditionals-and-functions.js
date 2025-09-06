// Equals

let equals = 1 === 1;
console.log(equals);

// Greater than
let greaterThan = 5 > 1;

// Less than
let lessThan = 2 < 10;

// Greater than Equals
let greaterThanEq = 5 >=5;

// Less than Equals
let lessThanEq = 4 <= 9;

// Not Equals
let notEquals = 5 !== 2;

let storeA = 4.40;
let storeB = 3.40;

let storeAIsLower = storeA < storeB;

if (storeAIsLower) {
console. log("Store A has a lower price.")
} else if (storeB < storeA) {
    console. log("Store B has a lower price.")
} else {
    console. log("Their prices are equal.")
}

// Functions

function compareStorePrices (storeA, storeB) {
    let storeAIsLower = storeA < storeB;
    if (storeAIsLower) {
        console. log("Store A has a lower price.")
} else if (storeB < storeA) {
    console. log("Store B has a lower price.")
} else {
    console. log("Their prices are equal.")
}
}
compareStorePrices (10, 5);
compareStorePrices (7, 10);

function squareNum (number) {
    let squared = number * number;
    return squared;
}
let squaredNumber = squareNum (10) ;
console. log (squaredNumber);

// Scope

let x = 10;

function addNumbers (n, m, x) {
    console.log(x);
    let b;
    if (1 === 1) {
        b = 8;
    }
    console.log(b);
    return n + m;
}
        addNumbers (1,2,10) ;

// Arrays

//                    0  1  2  3    4
let ourArray = [1, 2, 3, 4, ['a', 'b', 'c']];
let newArr = ourArray [4];
console. log (newArr [0]);
console.log (ourArray[2]);

// Loops

//             For loop       0  1  2  3  4  5  6
    let oursArray = [1, 2, 3, 4, 5, 6, 7];

let arrLen = oursArray.length;
for (let i = 0; i<arrLen; i++) {
//console.log("i is equal to: " + i);
    console.log(oursArray [i]);
    for (let j = 0; j < 10; j++) {
        console.log('j is equal to: ' + j);
    }
}

// while loop

let xx = 0;
while (xx < 10) {
    console.log('Ran');
    xx = xx + 1;
}

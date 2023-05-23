let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};

day1.wolf = true;
// delete day1.wolf;

// console.log(day1.squirrel)
// console.log(day1.events)
// console.log(day1.wolf)
// console.log(typeof [day1.events])

// console.log(Object.keys(day1))

let myString = "I come first";
myString += " I come second";

// console.log(myString);

const anAdjective = "awesome!";
let ourStr = "freeCodeCamp is ";
// console.log(ourStr += anAdjective);

const arr = [
    [1, 2, 3, [4, 5, 6]],
    [4, 5, 6],
    [7, 8, 9],
    [
        [10, 11, 12], 13, 14
    ]
];

subarr = arr[0][3][2];
// console.log(subarr);

const element = arr[3][0][1];
// console.log(element);

const arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push("happy", "joy");
// console.log(arr2)

const myArray = [
    ["John", 23],
    ["cat", 2]
];
// console.log(myArray.push("John", "cat"));

// JSON

let string = JSON.stringify(myArray);
console.log(string);
console.log(JSON.parse(string));
//Default params (parameters)
function rollDice(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1
}

//wont' work the way you want:
function greet(greeting = 'Hey', person){
    console.log(`${greeting}, ${person}`)
} //if the user only inputs one value, it'll refer to the 'greeting' value, and person will be undefined; 
  //the order matters, and the inputs will be used in order;

//will work the way you want:
function greet1(person, greeting = 'Hey'){
    console.log(`${greeting}, ${person}`)
}


//Spread (...value)
const numbers = [1,6,98,30,46,4,62,35,15];

let mathNaN = Math.max(numbers); //it can't read inside of the array, it'll return 'NaN';
let mathMax = Math.max(...numbers); //it will spread/"open", the array, and it'll return the greater value;

let str = 'hello';

const hello = [...str];
//['h', 'e', 'l', 'l', 'o'];

const allTogether = [...str, ...numbers];
//['h', 'e', 'l', 'l', 'o', 1, 6, 98, 30, 46, 4, 62, 35, 15];

const book = {nameBook:"Duna", formedByBooks: 6};
const bookstore = {nameBookstore: "Vyce's Bookstore", hasBooks: 36};

const bookInBookstore = {...bookstore, ...book, price: "R$50,00"};
//{nameBookstore: "Vyce's Bookstore", hasBooks: 36, nameBook: 'Duna', formedByBooks: 6, price: 'R$50,00'}
//if is has two or more keys with the same name (ex: 'name: Duna', 'name: Vyce's Bookstore'), the last one will "win";

const arObj = {...[2,4,6,8]}; //spread ab array into an object;
//{0: 2, 1: 4, 2: 6, 3: 8} - the index will be the key;


//Rest params
// function sum() {
//     return arguments.reduce((total, el) => total + el)
// } --- it won't work, because 'arguments' won't create an actual array;

function sum(...numbs) {
    return numbs.reduce((total, el) => total + el)
}//sum(3,4,5,6,2,3,4,643,534)
 //1204

function raceResults(gold, silver, bronze,...rest){
    console.log(`The gold medal goes to: ${gold}`)
    console.log(`The silver medal goes to: ${silver}`)
    console.log(`The bronze medal goes to: ${bronze}`)
    console.log(`Thanks to the other competitors: ${rest}`)
 }
// raceResults('Bruno','Yas','Gabirel','Matheus','Loris','Jady', 'Cauã')
// The gold medal goes to: Bruno
// The silver medal goes to: Yas
// The bronze medal goes to: Gabirel
// Thanks to the other competitors: Matheus,Loris,Jady,Cauã


//Destructuring
const scores = [100, 97, 85, 60, 49, 33, 28, 13, 4];

const [gold, silver, bronze, ...rest] = scores; //creates new variables with the content in the array, following the order;
// gold; - 100
// silver; - 97
// bronze; - 85
// rest; - [60, 49, 33, 28, 13, 4]

const brother = {
    firstName: 'Matheus',
    lastName: 'Silva',
    job: 'Software Engineer',
    relationshipStatus: 'Single',
    born: 2000,
    died: 2100
}

const {firstName, lastName, job, relationshipStatus} = brother; //creates a variable with the content in the object using the keys;
// firstName; -'Matheus'
// lastName; - 'Silva'
// job; - 'Software Engineer'
// relationshipStatus; - 'Single'
const { born: birthYear, died: deathYear = 'N/A', socialmedia = 'N/A'} = brother; //gives another name to variable;
// birthYear; - 2000
// deathYear; - 2100
// socialmedia; - N/A

// "= 'something'" -- creates a default value to the variable, in case the key searched doesn't exist;

function fullName({firstName, lastName}) {
    return `${firstName} ${lastName}`
}
//fullName(brother); -- 'Matheus Silva';

// Functions - three ways to create a function in JS

// NAMED: function_name() {}
// ANONYMOUS: variable_name = function(){}
// ARROW: variable_name = () => {}

// ------------------------------------------------------------------------------- //

// 1. name declaration

function sayHello() {
  return "Hello World!";
};

console.log('sayHello message: ', sayHello());
// NB pass a parameter and JS will ignore it! LOL
// also if you define the function with parameters and then don't pass arguments, it works
// eg
// function sayHello(name)
// and then call sayHello()
// it still works
console.log('sayHello message: ', sayHello("Niall"));

function sayHello(name) {
  return `Hello ${name}!`;
};

console.log('sayHello message: ', sayHello("Niall"));

// default parameters

function sayHello(name = "World") {
  return `Hello ${name}!`;
};

console.log('sayHello message: ', sayHello());
console.log('sayHello message: ', sayHello("Niall"));

// more parameters
// notice that if you pass one parameter only, the one without default is skipped
function sayHello(greeting, name = "World") {
  return `${greeting} ${name}!`;
};

console.log('sayHello message: ', sayHello("Hello", "Niall"));
console.log('sayHello message: ', sayHello("Niall"));

// Attention!
// parameter with default must be last in the least!!!

function sayHello(name = "World", greeting) {
  return `${greeting} ${name}!`;
};
console.log('sayHello message: ', sayHello("Niall"));

// if both have default values and you pass one argument, the first one will take the value passed as argument

function sayHello(name = "World", greeting="name") {
  return `${greeting} ${name}!`;
};
console.log('sayHello message: ', sayHello("Niall"));

// Attention
// in JS you don't need to declare the function before calling it
// the following works as well.

console.log('sayHello message: ', sayHello("Niall", "Jordan"));
function sayHello(name = "World", greeting="Good evening") {
  return `${greeting} ${name}!`;
};

// ------------------------------------------------------------------------------- //

// 2. Anonymous functions

// create a function and store is as a variable

var add = function(firstNumber, secondNumber){
  return firstNumber + secondNumber;
};

console.log(add(1,2));

// NB unlike named functions, the Anonymous functions are not hoisted
// So they have to be created before being called

// Task: 20 minutes

// Declare a named function that takes an array of numbers, and returns the sum, or total, of all of the numbers in the array.

function calculateSum(numbers){
  var total = 0;
  for (var number of numbers) {
    total += number;
  }
  return total;
};

console.log(calculateSum([1,4,5,8,9]));

// Define an anonymous function expression that takes two arguments:
// an object, for example, { name: 'Wojtek', age: 30 }
// a string, for exmaple, 'name'
// Your function should return true if the given string is a key on the given object and false if the object does not have a key that matches the string. Store this function in an appropriately named variable to invoke it.

// var isItAKey = function(object, string) {
//   var answer = false;
//   for (var key of object.keys){
//     if (key === string){
//       answer = true;
//     }
//   }
//   return answer;
// }

var isItAKey = function(object, string) {
  if (object[string]){
    return true
  } else {
    return false
  }
}

var wojtek = {
  name: 'Wojtek',
  age: 30,
  nationality: 'Polish',
  haircolour: 'brown'
};

console.log(wojtek);
console.log(isItAKey(wojtek, "haircolour"));
console.log(isItAKey(wojtek, "whatever"));

// ------------------------------------------------------------------------------- //


// 3. ARROW Functions

var multiply = (firstNumber, secondNumber) => {
  return firstNumber * secondNumber;
}

// NB if the whole functions can be written in one line you can avoid the {}
// that's not possible for the other 2 types of functions
// var multiply = (firstNumber, secondNumber) => return firstNumber * secondNumber;

console.log(multiply(2,3));

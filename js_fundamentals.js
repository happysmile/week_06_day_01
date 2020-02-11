console.log("Hello world again!");
// comments are like this

var name = "Mickey";

// passing more parameters in the console.log
// it adds space between variables
console.log("name:", name, "!");

// also string concatenation
console.log("name: "+name+"!")

// reassigning variables in JS is possible even if different type
var greeting = "Hello!";
greeting = 5;
console.log(greeting);

// using typeof. Note the syntax of the typeof method.
console.log(typeof "hello!");
console.log(typeof name);
console.log(typeof greeting);
console.log(typeof false);
console.log(typeof unknown_variable);

// string methods in console.log argument
// NB no need to use VAR...
name = "Niall";
console.log(name.toUpperCase());

// NB all numbers, not integers/floats
console.log(typeof 1);
console.log(typeof 1.5);

// like for strings, you can use operations inside console.log parameters
console.log(5+7);
console.log(5-3);
console.log(27/9);
console.log(5*5);
console.log(2**3);
console.log(3%2);

// String() turns argument into a string
console.log(typeof String(5));

// String interpolation: use special quotes ``
var name ="Donald";
console.log(`Hello, ${name}`);

// note the difference between null and undefined in JS
var name = null;
console.log(null);
console.log(typeof null);
var myVariable;
console.log(myVariable);
console.log(typeof myVariable);

// NB the following is not undefined but not defined...
// console.log(bananas);
// this gives an error
// if you declare a variable but not assign it a value, then it's undefined
// if you don't declare it, then it's not defined (error)

// var myVar; <== variable declaration
// myVar = "Hello"; <== assignment
// both can happen at the same time
// var myVar = "Hello";

// NB! typeof NaN is NUMBER! LOL
console.log(typeof NaN);
// The following gives NaN
console.log(undefined+1);

// BOOLEAN

var myBool = true;
console.log(myBool);
console.log(typeof myBool);

//  if statements

if (1>0) {
  var message = "1 is greater than 0";
} else if (1==0) {
  var message = "1 is equal to 0";
} else {
  var message = "1 is not greater than 0";
}

// NB TRUTHY AND FALSY!!!!!!

// In JavaScript, a truthy value is a value that translates to true when evaluated in a Boolean /context. All values are truthy unless they are defined as falsy (i.e., except for false, 0, "", null, undefined, and NaN).

if (null) {
  console.log("The expression is true");
} else {
  console.log("The expression is false");
}

// Run the following in the Node REPL, use the Boolean function check out the truthy and falsy values:
// a string
// '' (an empty string)
// 0
// a number other than zero
// undefined
// NaN

console.log(Boolean("Hello world")); // true
console.log(Boolean(27)); // true
console.log(Boolean("")); // false
console.log(Boolean(0)); // false
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(undefined)); // false

// WEAKLY AND STRONGLY

// > 3 + "hello"
// '3hello'
// > typeof 3 + "hello"
// 'numberhello'
// > typeof (3 + "hello")
// 'string'
// > "Route " + 6 + 6
// 'Route 66'
// > typeof ("Route " + 6 + 6)
// 'string'
// > 6 + 6 + "route"
// '12route'
// > typeof (6 + 6 + "route")
// 'string'

// NB difference between == and === (identical)

// > 2 == 2
// true
// > 2 == "2"
// true
// > 2 === "2"
// false
// > 2 != 2
// false
// > 2 != "2"
// false
// > 2 !== "2"
// true
// >


// > 2 !== "2"
// true
// >
// > true && true
// true
// > true && false
// false
// > true || true
// true
// > true || false
// true
// > false || true
// true
// > false || false
// false
// > (1+1 === 2) && (1+1 === 4)
// false

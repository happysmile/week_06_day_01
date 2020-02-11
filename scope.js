// 1. VAR function scoped
// 2. LET block scoped
// 3. CONST block scoped

// ======================================================================== //

// 1. VAR function scoped
// avoid if you can

// var secretFunction = function() {
//   var pinCode = [0,0,0,0];
//   console.log('pincode is: ', pinCode);
// }
//
// secretFunction();

// error: pinCode is not defined outside the function!
// console.log('pinCode outside of function: ', pinCode);

// var name = "Jill";
//
// var secretFunction = function() {
//   console.log('name inside of function: ', name)
// }
//
// secretFunction();
// console.log('name outside of function: ', name)


var filterNamesByFirstLetter = function(names, letter){
  filteredNames = [];
  for(var name of names){
    if(name[0] === letter){
      filteredNames.push(name);
    }
  }
  // NB
  // console.log('name after for loop: ', name)
  // would return "Kevin", the last value of "name" variable!
  // if I had used let instead of var, the same would return
  // "name is not defined"
  return filteredNames;
}

var students = ["John", "Jack", "Joseph", "Kevin"];
console.log(filterNamesByFirstLetter(students, "J"));


// ======================================================================== //


// 2. LET block scoped

let isItFive = function(number) {
  let result;
  console.log('result at the start: ', result);
  if (number === 5){
    result = true;
  } else {
    result = false;
  }
  return result;
}

console.log(isItFive(4));
console.log(isItFive(5));

// Task

// let temperature = 30;
// if (temperature > 15) {
//   let jacket = false;
//   var happy = true;
// } else {
//   let jacket = true;
//   var happy = false;
// }
// console.log('jacket after if-else blocks:', jacket);
// console.log('happy after if-else blocks:', happy);

// ======================================================================== //

// 3. CONSTANT block scoped
// once a value is assigned to a constant, it can't be changed
// no shit, sherlock haha

let calculateEnergy = function (mass){
  const speedOfLight = 299792458;
  return mass * speedOfLight ** 2;
}

let energyOfMe = calculateEnergy(68);
console.log('energyOfMe: ', energyOfMe);

// check this out
// song is const but attributes can change
// const prevents from changing only variables

const song = {
  title: "Raspberry Beret",
  artist: "Prince"
};
console.log('song before mutation', song);
song.title = "When Doves Cry";
song.year = 1984;
console.log('song after mutation', song);


// polluting the global scope
// avoid doing that

const helloWorld = function() {
  result = "Hello World!";
}

helloWorld();
console.log(result);

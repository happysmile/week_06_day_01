// Learning Objectives
// Understand function scope
// Know the difference in between the let and const keywords
// Brief
// Using your knowledge about scope and variable declarations in JavaScript,
// look at the following code snippets and predict what the output or error
// will be and why. Copy the following episodes into a JavaScript file and add
// comments under each one detailing the reason for your predicted output.
//
// MVP



// Episode 1
// This should output "Miss Scarlet"
//
//
// const scenario = {
//   murderer: 'The murderer is Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };
//
// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// };
//
// const verdict = declareMurderer();
// console.log(verdict);

// Episode 2
// this should return error because
// const murderer has been defined already so it can't be redefined in changeMurderer
//
//
// const murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);


// Episode 3
// This should output
// First Verdict: The murderer is Mrs Peacock
// because declareMurderer will use define murderer
// with the block variable
// > let murderer = 'Mrs. Peacock'
// Second Verdict: The murderer is Professor Plum
// because in this case murdered is defined outside the declareMurderer function
// > let murderer = 'Professor Plum';
//
//
// let murderer = 'Professor Plum';
//
// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }
//
// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);
//
// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);


// Episode 4
// "The suspects are Miss Scarlett, Professor Plum, Colonel Mustard"
// "Suspect three is Mrs Peacok"
// The 3 suspects are defined at the beginning, but inside
// declareAllSuspects suspectThree is changed into Colonel Mustard
// however the last statement about suspct three calls the suspectThree
// variable as defined outside the declareAllSuspects function
// that is Mrs Peacok
//
//
// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';
//
// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }
//
// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);


// Episode 5
// The output should be
// "The weapon is the Revolver"
// The weapon variable is initially assigned a value of 'Candle Stick'
// however it's changed to 'Revolver' with changeWeapon function
// so when declareWeapon is called, it uses the new value
//
//
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };
//
// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }
//
// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }
//
// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);


// Episode 6
// The output should be
// "The murderer is Mrs White"
// murdered is initially assigned the value of 'Colonel Mustard'
// then the function 'changeMurderer' first changes the value to 'Mr Green'
// then calls plotTwist and changes it to 'Mrs White'
//
//
// let murderer = 'Colonel Mustard';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }
//   plotTwist();
// }
//
// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);


// Episode 7
// The output should be
// ======> I need someone to explain this to me

// let murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';
//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }
//     unexpectedOutcome();
//   }
//   plotTwist();
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);


// Episode 8
// weapon: candle Stick
// murderer: Colonel Mustard
// The changeScenario function changes the room to Dininig room
// The plotTwist function changes the murderer to Colonel Mustard and then
// calls the unexpectedOutcome functon passing 'Colonel Mustard' as argument
// since that is the new murderer, the unexpectedOutcome changes the weapon to
// Candle Stick
//
//
// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };
//
// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';
//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }
//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }
//     unexpectedOutcome('Colonel Mustard');
//   }
//   plotTwist('Dining Room');
// }
//
// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }
//
// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);


// Episode 9
// OOh! It's professor Plum because in
// let murderer = 'Mrs. Peacock'
// the scope is only inside the function!
//
//
// let murderer = 'Professor Plum';
//
// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);


// Extensions
// Make up your own episode!
//

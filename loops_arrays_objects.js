var sports = ['football', 'tennis', 'rugby'];
console.log(sports);

// NB .lenght, not .lenght() as it is a property and not a method
console.log('number of elements: ', sports.length)

console.log('first sport: ', sports[0]);
console.log('second sport: ', sports[1]);
console.log('third sport: ', sports[2]);

sports.push('curling');
sports.push('snooker');
sports.push('darts');

console.log('sports array: ', sports);

// POP method removes an element from end of array but also return the removed element!
var removedSport = sports.pop();
console.log('removed sport: ', removedSport);
console.log('Sports array: ', sports);

// UNSHIFT adds element at the beginning of the array
sports.unshift('basketball');
console.log('sports array: ', sports);

// SHIFT removes element at the beginning of the array
var removedSport = sports.shift();
console.log('Removed sport: ', removedSport);
console.log('arry with basketball removed: ', sports);

// SPLICE changes content of array by removing or replacing existing elements and/or adding new elements in place.

// the following is deleting element with index 3; the second parameter is deleteCount;
// if second paramenter not given, it just deletes everything after the element position passed as first parameter.
var removedSport = sports.splice(3, 1);
console.log('Removed sport: ', removedSport);
console.log('sports array: ', sports);
// you could also pass parameters of what to add in that position if you want to replace the elements with other elements
// deletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

// FOR LOOP, modern version
// NB =============> FOR ... OF !!!!!!!!!!!!!

for (var sport of sports) {
  var upperCasedSport = sport.toUpperCase();
  console.log(upperCasedSport);
}

// old school foor loop
// much more flexible
// the increment i++ can be different, for example i+=2
// also it can be an increment, but also decrease etc
// for (initialiseCounter; condition; mutateCounter){
//   dosomething
// }


for (var i=0; i<sports.length; i++) {
  var sport = sports[i];
  var upperCasedSport = sports[i].toUpperCase();
  console.log(upperCasedSport);
}

// OBJECTS

var movie = {
  title: "Parasite",
  year: 2019,
  language: "Korean"
};

// NB if I did
// var movie = [
//   title: "Parasite",
//   year: 2019,
//   language: "Korean"
// ];
// then it would need movie["title"] etc

console.log("movie object: ", movie);
console.log("movie title: ", movie.title);

// look at this! Adding a new property has never been easier!
movie.cast = ["Song Kang-ho", "Lee Sun-kyun"];

// change a property is also straightforward
movie.language = "English";
console.log("movie object: ", movie);

// nb I can't usee special character like '-' for properties
// eg
// movie.subtitle-language = "English" ==> SYNTAX ERROR
// while the following works!
// but notice that it will be a string (key) and not a property because of the '-'
// if I did movie['language'] = "English" it wouldn't be output as a string
movie['subtitle-language'] = "English"
console.log("movie object: ", movie);

// another example
var propertyToAccess = "subtitle-language";
movie[propertyToAccess] = "German";
console.log('subtitle language: ', movie[propertyToAccess]);
// the following is undefined!
console.log('subtitle language: ', movie.propertyToAccess);

// delete properties from an object
delete movie.year;
console.log("movie without year: ", movie);

// values of an object can be anything. Even objects.
movie.ratings = {
  critic: 94,
  audience: 95
}
console.log("movie object: ", movie);
console.log("critic rating: ", movie.ratings.critic);
console.log("audience rating: ", movie.ratings.audience);

// FOR loops in OBJECTS
// ATTENTION!
// FOR for OBJECTS uses IN
// FOR for ARRAYS uses OF

// NB use of [key] instead of .key
for (var key in movie) {
  console.log(`The ${key} is ${movie[key]}`);
}

// NB .keys is a class method
var keys = Object.keys(movie);
console.log("keys: ", keys);

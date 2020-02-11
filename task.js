var movies = [
  {
    title: 'It\'s a Wonderful Life',
    year: 1946,
    director: 'Frank Capra',
    cast: [
      'James Stewart',
      'Donna Reed'
    ],
    ratings: {
      critic: 94,
      audience: 95
    }
  },
  {
    title: 'Black Panther',
    year: 2018,
    director: 'Ryan Coogler',
    cast: [
      'Chadwick Boseman',
      'Michael B. Jordan'
    ],
    ratings: {
      critic: 97,
      audience: 77
    }
  },
  {
    title: 'Star Wars: The Last Jedi',
    year: 2017,
    director: 'Rian Johnson',
    cast: [
      'Mark Hamill',
      'Carrie Fisher'
    ],
    ratings: {
      critic: 91,
      audience: 48
    }
  },
  {
    title: 'Citizen Kane',
    year: 1941,
    director: 'Orson Welles',
    cast: [
      'Joseph Cotten',
      'Dorothy Comingore'
    ],
    ratings: {
      critic: 100,
      audience: 90
    }
  },
];


for (var movie of movies) {
  movie.title = movie.title.toUpperCase();
}
console.log(movies);

// 2. Loop through the array and find the movie with the title Citizen Kane. log its year of release.
// NB it has just changed to uppercase

for (var movie of movies) {
  if (movie.title === 'CITIZEN KANE'){
    console.log('Citizen Kane release year: ', movie.year);
  }
}

// 3. Using a different kind of loop, iterate through the movies and log each movie's title and audience rating.

for (var i=0; i<movies.length; i++){
  console.log(`Title: "${movies[i].title}", audience rating: ${movies[i].ratings.audience}`);
}

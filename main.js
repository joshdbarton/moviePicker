const loadDatabase = identifier => {
    return JSON.parse(localStorage.getItem(identifier))
}

const movieDatabase = loadDatabase('movieDatabase');

//create div to hold items, append to article
let row = document.createElement('div');
const targArt = document.getElementById('movieHolder');
targArt.appendChild(row);

//function to select director
const moviePicker = myDirector => {
    //iterates through movies
    movieDatabase.movies.forEach (
        (currentMovie) => {
            //checks to see if the row is three movies long, if it is, starts a new row
            if (row.childNodes.length % 3 === 0 && row.childNodes.length != 0) {
                row = document.createElement('div')
                targArt.appendChild(row);
                row.className = 'clearfix';
            }
            //checks for director's name in currentMovie, creates newMovie if true, or all of them if undefined
            if (currentMovie.director === myDirector || myDirector === 'all') {
            const newMovie = document.createElement('section');
            const newName = document.createElement('h2');
            newName.textContent = currentMovie.name;
            newMovie.appendChild(newName);  
            const newDirector = document.createElement('p');
            newDirector.textContent = currentMovie.director;
            newMovie.appendChild(newDirector)
            const newYearReleased = document.createElement('p');
            newYearReleased.textContent = currentMovie.yearReleased;
            newMovie.appendChild(newYearReleased) 
            if (currentMovie.yearReleased <= 2000) {
                newMovie.className = 'old-movie'
            } else {
                newMovie.className = 'new-movie'
            }
            row.appendChild(newMovie);
            }
        }
    )
}

moviePicker('all');

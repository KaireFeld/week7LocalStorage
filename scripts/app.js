const container = document.querySelector('.container');
const movieTitle = document.querySelector ('.userInputTitle');
const moviePosterURL = document.querySelector('.userInputPosterUrl');
const movieYear = document.querySelector('.userInputYear');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');

let TitleInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageUrl');
let YearInStorage = localStorage.getItem('year');

if(TitleInStorage && imageUrlInStorage) {
    movieTitleToDisplay.textContent = TitleInStorage;
    container.style.backgroundImage = `linear-gradient(#11116590, rgba(128, 82, 82, 0.581)), 
    url('${imageUrlInStorage}')`;
}

btn.addEventListener ('click', ()=> {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterURL.value;
    let movieYearInput = movieYear.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    localStorage.setItem('year', movieYearInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    container.style.backgroundImage = `linear-gradient(#11116590, rgba(128, 82, 82, 0.581)),
    url('${posterUrlInput}')`;
    movieTitle.value = '';
    moviePosterURL.value = '';
    movieYear.value = '';
});
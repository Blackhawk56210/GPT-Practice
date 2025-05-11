// end point to use: https://ghibliapi.vercel.app/api/films
/** returns an array of objects 
 * {
  "title": "My Neighbor Totoro",
  "description": "Two sisters move to the country...",
  "director": "Hayao Miyazaki",
  "release_date": "1988"
}
 */

async funtion fetchFilmByName(name) {
    fetch(`https://ghibliapi.vercel.app/api/films`)
    .then( (res) => res.json())
    .then( data => {
        
    })
}
/*jshint esversion: 6*/
function reqFilms() {
  const requestData = JSON.parse(this.responseText);
  console.log('what it do? ', requestData.results);
  const titles = requestData.results;
  const films = document.querySelector('#filmList');

  for(var i = 0; i < requestData.results.length; i++) {
    const titleOfFilm = requestData.results[i].title;
    // const

    let newLi = document.createElement('li');
    newLi.setAttribute('class', 'film');
    films.appendChild(newLi);

    let filmTitle = document.createElement('h2');
    filmTitle.setAttribute('class', 'filmTitle');
    newLi.appendChild(filmTitle);
    filmTitle.innerHTML = titleOfFilm;

    let planet = document.createElement('h3');
    newLi.appendChild(planet);

    let newUl = document.createElement('ul');
    newUl.setAttribute('class', 'filmPlanets');
    newLi.appendChild(newUl);

//remember that i and j are different numbers running through different loops

    const howManyPlanets = requestData.results[i].planets;
    console.log('number of planets ', howManyPlanets);
    for(let j = 0; j < howManyPlanets.length; j++) {

      function reqPlanets() {
        getPlanetData = JSON.parse(this.responseText);
        const getPlanetname = getPlanetData.name;
        console.log('planetname ', getPlanetname);

        let newLi2 = document.createElement('li');
        newLi2.setAttribute('class', 'planet');
        newUl.appendChild(newLi2);


        let pName = document.createElement('h4');
        pName.setAttribute('class', 'planetName');
        pName.innerHTML = getPlanetname;
        newLi2.appendChild(pName);


      }

      const oReqPlanets = new XMLHttpRequest();
      oReqPlanets.addEventListener('load', reqPlanets);
      oReqPlanets.open('GET' , requestData.results[i].planets[j]);
      oReqPlanets.send();
    }






  }
}




const oReq5 = new XMLHttpRequest();
oReq5.addEventListener('load', reqFilms);
oReq5.open('GET' , 'http://swapi.co/api/films/');
oReq5.send();












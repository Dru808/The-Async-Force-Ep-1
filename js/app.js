/*jshint esversion: 6*/

function reqPerson4() {
  const requestData = JSON.parse(this.responseText);
  const name = requestData.name;
  const personName = document.querySelector('#person4Name');
  personName.innerHTML = 'I am ' + name;
}

function reqHomeWorld4() {
  const requestData = JSON.parse(this.responseText);
  const name = requestData.name;
  const personWorld = document.querySelector('#person4HomeWorld');
  personWorld.innerHTML = 'My home world is ' + name;
}

function reqPerson14() {
  const requestData = JSON.parse(this.responseText);
  const name = requestData.name;
  const personName = document.querySelector('#person14Name');
  personName.innerHTML = 'I am ' + name;
}

function reqSpecies14() {
  const requestData = JSON.parse(this.responseText);
  const name = requestData.name;
  const personWorld = document.querySelector('#person14Species');
  personWorld.innerHTML = 'I am of the ' + name + ' species';
}

function reqFilms() {
  const requestData = JSON.parse(this.responseText);
  console.log('what it do? ', requestData.results[0].title);
  const titles = requestData.results;
  const films = document.querySelector('#filmList');
  // films.innerHTML =

  for(let i = 0; i < requestData.results.length; i++) {
    let newLi = document.createElement('li');
    newLi.setAttribute('class', 'film');
    films.appendChild(newLi);

    let filmTitle = document.createElement('h2');
    filmTitle.setAttribute('class', 'filmTitle');
    newLi.appendChild(filmTitle);

    let planet = document.createElement('h3');
    newLi.appendChild(planet);

    let newUl = document.createElement('ul');
    newUl.setAttribute('class', 'filmPlanets');
    newLi.appendChild(newUl);


  }
}

const oReq = new XMLHttpRequest();
oReq.addEventListener('load', reqPerson4);
oReq.open('GET' , 'http://swapi.co/api/people/4/');
oReq.send();

const oReq2 = new XMLHttpRequest();
oReq2.addEventListener('load', reqHomeWorld4);
oReq2.open('GET' , 'http://swapi.co/api/planets/1/');
oReq2.send();

const oReq3 = new XMLHttpRequest();
oReq3.addEventListener('load', reqPerson14);
oReq3.open('GET' , 'http://swapi.co/api/people/14/');
oReq3.send();

const oReq4 = new XMLHttpRequest();
oReq4.addEventListener('load', reqSpecies14);
oReq4.open('GET' , 'http://swapi.co/api/species/1/');
oReq4.send();

const oReq5 = new XMLHttpRequest();
oReq4.addEventListener('load', reqFilms);
oReq4.open('GET' , 'http://swapi.co/api/films/');
oReq4.send();